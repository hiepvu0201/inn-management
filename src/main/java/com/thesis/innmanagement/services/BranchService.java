package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.*;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.repositories.BranchRepository;
import com.thesis.innmanagement.repositories.FacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class BranchService {

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private FacilityRepository facilityRepository;

    public List<Branches> findAll() {
        return branchRepository.findAll();
    }

    public Branches findById(Long id) throws ResourceNotFoundException {
        return branchRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Branch not found on id: " + id));
    }

    public List<Branches> findAllByUserName(String userName) {
        return branchRepository.findAllByUserName(userName);
    }

    public Branches getBranchByBranchLocation(String branchLocation) {
        return branchRepository.findByLocation(branchLocation);
    }

    public Branches createOrUpdate(Long id, Branches branch) throws ResourceNotFoundException {
        branch.setFacilities(facilityRepository.findAllById(branch.getFacilityIds()));
        if (id == null) {
            branchRepository.save(branch);
            return branch;
        } else {
            Branches branchUpdate = branchRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This branch not found on:" + id));
            branchUpdate.setLocation(branch.getLocation());
            branchUpdate.setDescription(branch.getDescription());
            branchUpdate.setNumberOfStages(branch.getNumberOfStages());
            branchUpdate.setNumberOfRooms(branch.getNumberOfRooms());
            branchUpdate.setFacilities(branch.getFacilities());
            branchUpdate.setFacilityIds(branch.getFacilityIds());
            branchUpdate.setUserName(branch.getUserName());
            branchRepository.save(branchUpdate);
            return branchUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Branches branch = branchRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Branch not found on: " + id));
        branchRepository.delete(branch);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
