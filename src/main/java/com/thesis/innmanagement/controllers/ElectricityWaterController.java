package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.ElectricityWater;
import com.thesis.innmanagement.services.ElectricityWaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/electricity-water")
public class ElectricityWaterController {

    @Autowired
    private ElectricityWaterService electricityWaterService;

    @GetMapping("/")
    public List<ElectricityWater> getAll() {
        return electricityWaterService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ElectricityWater> getElectricityWaterById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(electricityWaterService.findById(id));
    }

    @PostMapping("/")
    public ElectricityWater create(@Validated @RequestBody ElectricityWater electricityWater) throws Exception {
        return electricityWaterService.createOrUpdate(null, electricityWater);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ElectricityWater> update(@PathVariable(value = "id") Long id, @Validated @RequestBody ElectricityWater electricityWaterDetails) throws Exception {
        ElectricityWater electricityWater = electricityWaterService.createOrUpdate(id, electricityWaterDetails);
        return ResponseEntity.ok().body(electricityWater);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return electricityWaterService.delete(id);
    }
}
