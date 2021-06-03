package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.entities.UnitPrice;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.services.UnitPriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/unitPrice")
public class UnitPriceController {

    @Autowired
    private UnitPriceService unitPriceService;

    @GetMapping("/")
    public List<UnitPrice> getAll() {
        return unitPriceService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UnitPrice> getUnitPriceById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(unitPriceService.findById(id));
    }

    @GetMapping("/branchId/{branchId}")
    public ResponseEntity<UnitPrice> getUnitPriceByBranchId(@PathVariable(value = "branchId") Long brandId) {
        return ResponseEntity.ok().body(unitPriceService.findByBranchId(brandId));
    }

    @PostMapping("/")
    public UnitPrice create(@Validated @RequestBody UnitPrice unitPrice) throws Exception {
        return unitPriceService.createOrUpdate(null, unitPrice);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UnitPrice> update(@PathVariable(value = "id") Long id, @Validated @RequestBody UnitPrice unitPriceDetail) throws Exception {
        UnitPrice unitPrice = unitPriceService.createOrUpdate(id, unitPriceDetail);
        return ResponseEntity.ok().body(unitPrice);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return unitPriceService.delete(id);
    }

}
