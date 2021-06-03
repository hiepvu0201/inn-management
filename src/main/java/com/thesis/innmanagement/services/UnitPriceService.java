package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.UnitPrice;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.repositories.UnitPriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UnitPriceService {

    @Autowired
    private UnitPriceRepository unitPriceRepository;

    public List<UnitPrice> findAll() {
        return unitPriceRepository.findAll();
    }

    public UnitPrice findById(Long id) throws ResourceNotFoundException {
        return unitPriceRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Unit price not found on id: "+id));
    }

    public UnitPrice findByBranchLocation(String branchLocation) {
        return unitPriceRepository.findByBranchLocation(branchLocation);
    }

    public UnitPrice createOrUpdate(Long id, UnitPrice unitPrice) throws ResourceNotFoundException {
        if(id == null) {
            unitPriceRepository.save(unitPrice);
            return unitPrice;
        }
        else {
            UnitPrice unitPriceUpdate = unitPriceRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This unit price not found on:" + id));
            unitPriceUpdate.setName(unitPrice.getName());
            unitPriceUpdate.setUnitPrice(unitPrice.getUnitPrice());
            unitPriceUpdate.setBranchLocation(unitPrice.getBranchLocation());
            unitPriceRepository.save(unitPriceUpdate);
            return unitPriceUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        UnitPrice unitPrice = unitPriceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Unit price not found on: " + id));
        unitPriceRepository.delete(unitPrice);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
