package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Contracts;
import com.thesis.innmanagement.services.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/contracts")
public class ContractController {

    @Autowired
    private ContractService contractService;

    @GetMapping("/")
    public List<Contracts> getAll(){
        return contractService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contracts> getContractById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(contractService.findById(id));
    }

    @GetMapping("/search-by-owner-name")
    public ResponseEntity<List<Contracts>> getContractByOwnerName(@Param(value = "ownername") String ownerName) {
        return ResponseEntity.ok().body(contractService.findAllByOwnerName(ownerName));
    }

    @GetMapping("/search-by-tenant-name")
    public ResponseEntity<List<Contracts>> getContractByTenantName(@Param(value = "tenantname") String tenantName) {
        return ResponseEntity.ok().body(contractService.findAllByTenantName(tenantName));
    }

    @PostMapping("/")
    public Contracts create(@Validated @RequestBody Contracts contract) throws Exception{
        return contractService.createOrUpdate(null, contract);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Contracts> update(@PathVariable(value = "id") Long id, @Validated @RequestBody Contracts contractDetail) throws Exception{
        Contracts contract = contractService.createOrUpdate(id, contractDetail);
        return ResponseEntity.ok().body(contract);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return contractService.delete(id);
    }
}
