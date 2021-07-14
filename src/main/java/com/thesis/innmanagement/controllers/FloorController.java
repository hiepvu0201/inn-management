package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.entities.Floors;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.services.FloorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/floors")
public class FloorController {
    @Autowired
    private FloorService floorService;

    @GetMapping("/")
    public List<Floors> getAll() {
        return floorService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Floors> getFloorById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(floorService.findById(id));
    }

    @PostMapping("/")
    public Floors create(@Validated @RequestBody Floors floor) throws Exception {
        return floorService.createOrUpdate(null, floor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Floors> update(@PathVariable(value = "id") Long id, @Validated @RequestBody Floors floorsDetail) throws Exception {
        Floors floor = floorService.createOrUpdate(id, floorsDetail);
        return ResponseEntity.ok().body(floor);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return floorService.delete(id);
    }
    @GetMapping("/search-by-branch-location")
    public ResponseEntity<List<Floors>> getFloorByBranchLocation(@Param(value = "branchLocation") String branchLocation) {
        return ResponseEntity.ok().body(floorService.findAllByBranchLocation(branchLocation));
    }
}
