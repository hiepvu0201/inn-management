package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.Floors;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.repositories.BranchRepository;
import com.thesis.innmanagement.repositories.FloorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class FloorService {
    @Autowired
    private FloorRepository floorRepository;

    @Autowired
    private BranchRepository branchRepository;

    public List<Floors> findAll() {
        return floorRepository.findAll();
    }

    public Floors findById(Long id) throws ResourceNotFoundException {
        return floorRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Floor not found on id: "+id));
    }

    public Floors createOrUpdate(Long id, Floors floors) throws ResourceNotFoundException {
        if (floors.getBranchId() != null) {
            long branchId = floors.getBranchId();
            floors.setBranch(branchRepository.findById(floors.getBranchId())
                    .orElseThrow(() -> new ResourceNotFoundException("Branch not found on id: " + branchId)));
        }
        if(id == null) {
            floorRepository.save(floors);
            return floors;
        }
        else {
            Floors floorUpdate = floorRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This floor not found on:" + id));
            floorUpdate.setNumberOfFloors(floors.getNumberOfFloors());
            floorUpdate.setBranch(floors.getBranch());
            floorUpdate.setBranchId(floors.getBranchId());
            floorRepository.save(floorUpdate);
            return floorUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Floors floors = floorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Floors not found on: " + id));
        floorRepository.delete(floors);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @Transactional
    public List<Floors> findAllByBranchLocation(String branchLocation) {
        return floorRepository.findAllByBranchLocation(branchLocation).collect(Collectors.toList());
    }
}
