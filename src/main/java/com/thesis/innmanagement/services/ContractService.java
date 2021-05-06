package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.*;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.repositories.ContractRepository;
import com.thesis.innmanagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Contracts> findAll() {
        return contractRepository.findAll();
    }

    public Contracts findById(Long id) throws ResourceNotFoundException {
        return contractRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Contract not found on id: "+id));
    }

    public Contracts createOrUpdate(Long id, Contracts contracts) throws ResourceNotFoundException {
        contracts.setTenant(userRepository.findAllById(contracts.getTenantIds()));
        contracts.setOwner(userRepository.findAllById(contracts.getOwnerIds()));
        if(id == null) {
            contractRepository.save(contracts);
            return contracts;
        }
        else {
            Contracts contractUpdate = contractRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This contract not found on:" + id));
            contractUpdate.setDetails(contracts.getDetails());
            contractUpdate.setSignDate(contracts.getSignDate());
            contractUpdate.setTenant(contracts.getTenant());
            contractUpdate.setOwner(contracts.getOwner());
            contractUpdate.setNumberOfRooms(contracts.getNumberOfRooms());
            contractUpdate.setNumberOfStage(contracts.getNumberOfStage());
            contractRepository.save(contractUpdate);
            return contractUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Contracts contracts = contractRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contract not found on: " + id));
        contractRepository.delete(contracts);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}