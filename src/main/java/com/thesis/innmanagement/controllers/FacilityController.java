package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.Contracts;
import com.thesis.innmanagement.models.Facilities;
import com.thesis.innmanagement.repositories.FacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/facilities")
public class FacilityController {

    @Autowired
    private FacilityRepository facilityRepository;

    @GetMapping("/")
    public List<Facilities> GetAll(){
        return facilityRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Facilities> GetFacilityById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        Facilities facility = facilityRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Facility not found on id: " + id));
        return ResponseEntity.ok().body(facility);
    }

    @PostMapping("/")
    public Facilities Create(@Validated @RequestBody Facilities facility) throws Exception{
        return facilityRepository.save(facility);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Facilities> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Facilities facilityDetails) throws Exception{

        Facilities facility = facilityRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Facility not found on id: "+ id));

        final Facilities facilityInfo = facilityRepository.save(facility);

        return ResponseEntity.ok().body(facilityInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        Facilities facility = facilityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Facility not found on: " + id));
        facilityRepository.delete(facility);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
