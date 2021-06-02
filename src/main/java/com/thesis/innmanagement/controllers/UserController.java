package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.entities.AuthRequest;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.services.UserService;
import com.thesis.innmanagement.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/")
    public List<Users> getAll() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(userService.findById(id));
    }

    @GetMapping("/checkin")
    public ResponseEntity<String> checkIn(@Param("userName") String userName,
                                          @Param("roomNo") String roomNo) {
        String message = userService.checkIn(userName, roomNo);
        return ResponseEntity.ok().body(message);
    }

    @GetMapping("/checkout")
    public ResponseEntity<String> checkout(@Param("userName") String userName) {
        String message = userService.checkOut(userName);
        return ResponseEntity.ok().body(message);
    }

    @PostMapping(value = "/")
    public Users create(@Validated @RequestPart String user,
                        @RequestPart("images") MultipartFile images) throws ResourceNotFoundException, IOException {
        return userService.createOrUpdate(null, user, images);
    }

    @GetMapping("/search-by-rolename")
    public ResponseEntity<List<Users>> findByRoleId(@Param("rolename") String roleName) {
        return ResponseEntity.ok().body(userService.findAllByRoleName(roleName));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Users> update(@PathVariable(value = "id") Long id,
                                        @Validated @RequestPart("userDetail") String userDetail,
                                        @RequestPart("images") MultipartFile images)
            throws ResourceNotFoundException, IOException {
        Users userInfo = userService.createOrUpdate(id, userDetail, images);
        return ResponseEntity.ok().body(userInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return userService.delete(id);
    }

    @PostMapping("/login")
    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
            );
        } catch (Exception ex) {
            throw new Exception("inavalid username/password");
        }
        return jwtUtil.generateToken(authRequest.getUserName());
    }
}
