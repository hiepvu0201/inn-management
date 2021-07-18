package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.entities.enums.ERole;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.payload.PasswordChangeRequest;
import com.thesis.innmanagement.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

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
                                          @Param("roomNo") String roomNo,
                                          @Param("checkInDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime checkInDate) {
        String message = userService.checkIn(userName, roomNo, checkInDate);
        return ResponseEntity.ok().body(message);
    }

    @GetMapping("/checkout")
    public ResponseEntity<String> checkout(@Param("userName") String userName,
                                           @Param("checkOutDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime checkOutDate) {
        String message = userService.checkOut(userName, checkOutDate);
        return ResponseEntity.ok().body(message);
    }

    @PostMapping(value = "/")
    public Users create(@Validated @RequestPart String user,
                        @RequestPart("images") MultipartFile images) throws ResourceNotFoundException, IOException {
        return userService.createOrUpdate(null, user, images);
    }

    @GetMapping("/search-by-rolename")
    public ResponseEntity<List<Users>> findByRoleId(@Param("roleName") ERole roleName) {
        return ResponseEntity.ok().body(userService.findAllByRoleName(roleName));
    }

    @GetMapping("/userName")
    public ResponseEntity<Users> findByUserName(@Param("userName") String userName) {
        return ResponseEntity.ok().body(userService.findByUserName(userName));
    }

    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestBody PasswordChangeRequest passwordChangeRequest) {
        int responseId = userService.changePassword(passwordChangeRequest);
        String response;
        switch (responseId) {
            case 1:
                response = "Sai mật khẩu!";
                return ResponseEntity.badRequest().body(response);
            case 2:
                response = "Mật khẩu mới không khớp!";
                return ResponseEntity.badRequest().body(response);
            default:
                response = "Thay đổi mật khẩu thành công!";
                return ResponseEntity.ok().body(response);
        }
    }

    @GetMapping("/check")
    public ResponseEntity<Boolean> checkUserNameExisted(@RequestParam(value = "userName") String userName) {
        return ResponseEntity.ok().body(userService.checkUserNameExisted(userName));
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
}
