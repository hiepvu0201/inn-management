package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.*;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.repositories.ContractRepository;
import com.thesis.innmanagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Contracts> findAll() {
        return contractRepository.findAll();
    }

    public Contracts findById(Long id) throws ResourceNotFoundException {
        return contractRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contract not found on id: " + id));
    }

    @Transactional
    public List<Contracts> findAllByOwnerName(String ownerName) {
        return contractRepository.findAllByOwnerName(ownerName).collect(Collectors.toList());
    }

    @Transactional
    public List<Contracts> findAllByTenantName(String tenantName) {
        return contractRepository.findAllByTenantName(tenantName).collect(Collectors.toList());
    }

    public Contracts createOrUpdate(Long id, Contracts contracts) throws ResourceNotFoundException {
        Users tenant = userRepository.findById(contracts.getTenantId())
                .orElseThrow(()->new ResourceNotFoundException("Tenant not found on id: " + contracts.getTenantId()));
        contracts.setTenant(tenant);
        Users owner = userRepository.findById(contracts.getOwnerId())
                .orElseThrow(()->new ResourceNotFoundException("Owner not found on id: " + contracts.getOwnerId()));
        contracts.setOwner(owner);
        contracts.setClosed(contracts.getClosed());

        if (id == null) {
            // check existed contracts
            Contracts checkExist = contractRepository.findByTenantUserName(contracts.getTenant().getUserName(), contracts.getYear());
            if (checkExist != null) {
                if (checkExist.getTenantId() == tenant.getId() && checkExist.getOwnerId() == owner.getId() && contracts.getYear() == checkExist.getYear()) {
                    return null;
                }
            }
            contractRepository.save(contracts);
            return contracts;
        } else {
            Contracts contractUpdate = contractRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This contract not found on:" + id));
            contractUpdate.setDetails(contracts.getDetails());
            contractUpdate.setSignDate(contracts.getSignDate());
            contractUpdate.setNumberOfRooms(contracts.getNumberOfRooms());
            contractUpdate.setNumberOfStage(contracts.getNumberOfStage());
            contractUpdate.setVoucher(contracts.getVoucher());
            contractUpdate.setClosed(contracts.getClosed());
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
