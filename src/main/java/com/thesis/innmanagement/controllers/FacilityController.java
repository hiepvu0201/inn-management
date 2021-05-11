package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Facilities;
import com.thesis.innmanagement.services.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/facilities")
public class FacilityController {

    @Autowired
    private FacilityService facilityService;

    @GetMapping("/")
    public List<Facilities> getAll(){
        return facilityService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Facilities> getFacilityById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        return ResponseEntity.ok().body(facilityService.findById(id));
    }

    @PostMapping("/")
    public Facilities create(@Validated @RequestBody Facilities facility) throws Exception{
        return facilityService.createOrUpdate(null, facility);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Facilities> update(@PathVariable(value = "id") Long id, @Validated @RequestBody Facilities facilityDetails) throws Exception{
        Facilities facility = facilityService.createOrUpdate(id, facilityDetails);
        return ResponseEntity.ok().body(facility);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return facilityService.delete(id);
    }
}
