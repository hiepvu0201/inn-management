package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.Facilities;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.repositories.BranchRepository;
import com.thesis.innmanagement.repositories.FacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class FacilityService {

    @Autowired
    private FacilityRepository facilityRepository;

    @Autowired
    private BranchRepository branchRepository;

    public List<Facilities> findAll() {
        return facilityRepository.findAll();
    }

    public Facilities findById(Long id) throws ResourceNotFoundException {
        return facilityRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Facility not found on id: "+id));
    }

    public Facilities createOrUpdate(Long id, Facilities facility) throws ResourceNotFoundException {
        facility.setBranches(branchRepository.findAllById(facility.getBranchIds()));
        if(id == null) {
            facilityRepository.save(facility);
            return facility;
        }
        else {
            Facilities facilityUpdate = facilityRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This facility not found on:" + id));
            facilityUpdate.setName(facility.getName());
            facilityUpdate.setQuality(facility.getQuality());
            facilityUpdate.setQuantity(facility.getQuantity());
            facilityUpdate.setBranches(facility.getBranches());
            facilityRepository.save(facilityUpdate);
            return facilityUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Facilities facility = facilityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Facility not found on: " + id));
        facilityRepository.delete(facility);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}