package com.thesis.innmanagement.services;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Roles;
import com.thesis.innmanagement.repositories.RoleRepository;
import com.thesis.innmanagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public List<Roles> findAll() {
        return roleRepository.findAll();
    }

    public Roles findById(Long id) throws ResourceNotFoundException {
        return roleRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Role not found on id: "+id));
    }

    public Roles createOrUpdate(Long id, Roles role) throws ResourceNotFoundException {
        if(id == null) {
            roleRepository.save(role);
            return role;
        }
        else {
            Roles roleUpdate = roleRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This role not found on:" + id));
            roleUpdate.setName(role.getName());
            roleRepository.save(roleUpdate);
            return roleUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Roles role = roleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Role not found on: " + id));
        roleRepository.delete(role);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
