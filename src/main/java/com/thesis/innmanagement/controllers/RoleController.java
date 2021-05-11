package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Roles;
import com.thesis.innmanagement.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping("/")
    public List<Roles> getAll(){
        return roleService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Roles> getRoleById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        return ResponseEntity.ok().body(roleService.findById(id));
    }

    @PostMapping("/")
    public Roles create(@Validated @RequestBody Roles role) throws Exception{
        return roleService.createOrUpdate(null, role);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Roles> update(@PathVariable(value = "id") Long id, @Validated @RequestBody Roles roleDetail) throws Exception{
        Roles role = roleService.createOrUpdate(id, roleDetail);
        return ResponseEntity.ok().body(role);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return roleService.delete(id);
    }
}
