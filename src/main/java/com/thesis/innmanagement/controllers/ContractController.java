package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.Contracts;
import com.thesis.innmanagement.repositories.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/contracts")
public class ContractController {

    @Autowired
    private ContractRepository contractRepository;

    @GetMapping("/")
    public List<Contracts> GetAll(){
        return contractRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contracts> GetContractById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        Contracts contract = contractRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Contract not found on: " + id));
        return ResponseEntity.ok().body(contract);
    }

    @PostMapping("/")
    public Contracts Create(@Validated @RequestBody Contracts contract) throws Exception{
        return contractRepository.save(contract);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Contracts> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Contracts contractDetail) throws Exception{

        Contracts contract = contractRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Contract not found on id: "+ id));

        final Contracts contractInfo = contractRepository.save(contract);

        return ResponseEntity.ok().body(contractInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        Contracts contract = contractRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contract not found on: " + id));
        contractRepository.delete(contract);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
