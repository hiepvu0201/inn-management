package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.ReportedIssues;
import com.thesis.innmanagement.models.Users;
import com.thesis.innmanagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public List<Users> GetAll(){
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> GetUserById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        Users user = userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not found on id: "+id));
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/")
    public Users Create(@Validated @RequestBody Users user) throws Exception{
        return userRepository.save(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Users> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Users userDetail) throws Exception{

        Users user = userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not found on id: "+ id));

        final Users updateInfo = userRepository.save(user);

        return ResponseEntity.ok().body(updateInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        Users user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found on: " + id));
        userRepository.delete(user);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
