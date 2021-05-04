package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Users> GetAll(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> GetUserById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(userService.findById(id));
    }

    @PostMapping("/")
    public Users Create(@Validated @RequestBody Users user) throws Exception{
        return userService.createOrUpdate(null, user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Users> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Users userDetail) throws ResourceNotFoundException {
        Users userInfo = userService.createOrUpdate(id, userDetail);
        return ResponseEntity.ok().body(userInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return userService.delete(id);
    }
}
