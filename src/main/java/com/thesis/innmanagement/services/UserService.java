package com.thesis.innmanagement.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thesis.innmanagement.entities.Rooms;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.payload.PasswordChangeRequest;
import com.thesis.innmanagement.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private FileStorageService fileStorageService;

    @Autowired
    PasswordEncoder encoder;

    public List<Users> findAll() {
        return userRepository.findAll();
    }

    public Users findById(Long id) throws ResourceNotFoundException {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found on id: " + id));
    }

    public List<Users> findAllByRoleName(String roleName) {
        return userRepository.findAllByRoleName(roleName);
    }

    public Users findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    public String changePassword(PasswordChangeRequest passwordChangeRequest) {
        String passwordOld = userRepository.findPasswordByUserName(passwordChangeRequest.getUserName());
        if (!encoder.matches(passwordChangeRequest.getOldPassword(), passwordOld)) {
            return "Sai mật khẩu!";
        }
        if (!passwordChangeRequest.getNewPassword().equals(passwordChangeRequest.getConfirmNewPassword())) {
            return "Mật khẩu mới không khớp!";
        }
        String newPassword = encoder.encode(passwordChangeRequest.getNewPassword());
        userRepository.updatePassword(passwordChangeRequest.getUserName(), newPassword);
        return "Thay đổi mật khẩu thành công!";
    }

    public Boolean checkUserNameExisted(String userName) {
        return userRepository.existsByUserName(userName);
    }

    private Users update(Users user, Long id) throws ResourceNotFoundException {
        Users userUpdate = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("This user not found on:" + id));
        userUpdate.setPassword(encoder.encode(user.getPassword()));
        userUpdate.setFullName(user.getFullName());
        userUpdate.setIdNo(user.getIdNo());
        userUpdate.setSex(user.getSex());
        userUpdate.setJob(user.getJob());
        userUpdate.setAddress(user.getAddress());
        userUpdate.setPhoneNo(user.getPhoneNo());
        userUpdate.setCheckinDate(user.getCheckinDate());
        userUpdate.setCheckoutDate(user.getCheckoutDate());
        userUpdate.setDownPayment(user.getDownPayment());
        userUpdate.setRoles(user.getRoles());
        userUpdate.setRoleIds(user.getRoleIds());
        userUpdate.setImages(user.getImages());
        if (user.getRoom() != null && user.getRoomId() != null) {
            userUpdate.setRoom(user.getRoom());
            userUpdate.setRoomId(user.getRoomId());
        }
        return userUpdate;
    }

    public Users createOrUpdate(Long id, String userReq, MultipartFile image) throws ResourceNotFoundException, IOException {

        Users user = new Users();
        ObjectMapper objectMapper = new ObjectMapper();
        user = objectMapper.readValue(userReq, Users.class);

        String fileName = fileStorageService.storeFile(image);
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/v1/downloadFile/")
                .path(fileName)
                .toUriString();
        user.setImages(fileDownloadUri);
        user.setRoles(roleRepository.findAllById(user.getRoleIds()));
        if (user.getRoomId() != null) {
            Users finalUser = user;
            user.setRoom(roomRepository.findById(user.getRoomId()).orElseThrow(() -> new ResourceNotFoundException("Room not found on id: " + finalUser.getRoomId())));
        }
        if (id == null) {
            userRepository.save(user);
            return user;
        } else {
            Users userUpdate = update(user, id);
            return userRepository.save(userUpdate);
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Users user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found on: " + id));
        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    public String checkIn(String userName, String roomNo) {
        Users user = userRepository.findByUserName(userName);
        Rooms room = roomRepository.findByRoomNo(roomNo);
        user.setRoom(room);
        user.setRoomId(room.getId());
        userRepository.save(user);
        return "Check in success! Have a good day!";
    }

    public String checkOut(String userName) {
        try {
            Users user = userRepository.findByUserName(userName);
            user.setRoom(null);
            user.setRoomId(null);
            userRepository.save(user);
            return "Check out success! Have a good day!";
        } catch (Exception e) {
            return "Check out failed! Error: " + e.getMessage();
        }
    }
}
