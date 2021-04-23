package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.Roles;
import com.thesis.innmanagement.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/roles")
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("/")
    public List<Roles> GetAll(){
        return roleRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Roles> GetRoleById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        Roles role = roleRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Role not found on id: " + id));
        return ResponseEntity.ok().body(role);
    }

    @PostMapping("/")
    public Roles Create(@Validated @RequestBody Roles role) throws Exception{
        return roleRepository.save(role);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Roles> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Roles roleDetail) throws Exception{

        Roles role = roleRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Role not found on id: "+ id));

        final Roles roleInfo = roleRepository.save(role);

        return ResponseEntity.ok().body(roleInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        Roles role = roleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Role not found on: " + id));
        roleRepository.delete(role);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
