package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public List<Users> getAll(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(userService.findById(id));
    }

    @PostMapping("/")
    public Users create(@Validated @RequestBody Users user) throws Exception{
        return userService.createOrUpdate(null, user);
    }

    @GetMapping("/search-by-rolename")
    public ResponseEntity<List<Users>> findByRoleId(@Param("rolename") String roleName) {
        return ResponseEntity.ok().body(userService.findAllByRoleName(roleName));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Users> update(@PathVariable(value = "id") Long id, @Validated @RequestBody Users userDetail) throws ResourceNotFoundException {
        Users userInfo = userService.createOrUpdate(id, userDetail);
        return ResponseEntity.ok().body(userInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return userService.delete(id);
    }
}
