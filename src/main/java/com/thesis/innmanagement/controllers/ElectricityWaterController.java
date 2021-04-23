package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.ElectricityWater;
import com.thesis.innmanagement.repositories.ElectricityWaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/electric-water")
public class ElectricityWaterController {

    @Autowired
    private ElectricityWaterRepository electricityWaterRepository;

    @GetMapping("/")
    public List<ElectricityWater> GetAll(){
        return electricityWaterRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ElectricityWater> GetElectricityWaterById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        ElectricityWater electricityWater = electricityWaterRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Electricity-Water not found on id: " + id));
        return ResponseEntity.ok().body(electricityWater);
    }

    @PostMapping("/")
    public ElectricityWater Create(@Validated @RequestBody ElectricityWater electricityWater) throws Exception{
        return electricityWaterRepository.save(electricityWater);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ElectricityWater> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody ElectricityWater electricityWaterDetails) throws Exception{
        ElectricityWater electricityWater = electricityWaterRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Electricity-Water not found on id: "+ id));
        final ElectricityWater electricityWaterInfo = electricityWaterRepository.save(electricityWater);
        return ResponseEntity.ok().body(electricityWaterInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        ElectricityWater electricityWater = electricityWaterRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Electricity-Water not found on: " + id));
        electricityWaterRepository.delete(electricityWater);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
