package com.thesis.innmanagement.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thesis.innmanagement.entities.Contracts;
import com.thesis.innmanagement.entities.Rooms;
import com.thesis.innmanagement.entities.enums.ERole;
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
import java.time.LocalDateTime;
import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private RoomRepository roomRepository;

//    @Autowired
//    private FileStorageService fileStorageService;

    @Autowired
    private StorageService storageService;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    private ContractRepository contractRepository;

    public List<Users> findAll() {
        return userRepository.findAll();
    }

    public Users findById(Long id) throws ResourceNotFoundException {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found on id: " + id));
    }

    public List<Users> findAllByRoleName(ERole roleName) {
        return userRepository.findAllByRoleName(roleName);
    }

    public Users findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    public int changePassword(PasswordChangeRequest passwordChangeRequest) {
        String passwordOld = userRepository.findPasswordByUserName(passwordChangeRequest.getUserName());
        if (!encoder.matches(passwordChangeRequest.getOldPassword(), passwordOld)) {
            return 1;
        }
        if (!passwordChangeRequest.getNewPassword().equals(passwordChangeRequest.getConfirmNewPassword())) {
            return 2;
        }
        String newPassword = encoder.encode(passwordChangeRequest.getNewPassword());
        userRepository.updatePassword(passwordChangeRequest.getUserName(), newPassword);
        return 3;
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

        String fileName = storageService.uploadFile(image);
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

    public String checkIn(String userName, String roomNo, LocalDateTime checkInDate) {
        Users user = userRepository.findByUserName(userName);
        Rooms room = roomRepository.findByRoomNo(roomNo);
        user.setRoom(room);
        user.setRoomId(room.getId());
        user.setCheckinDate(checkInDate);
        room.setCheckedIn(true);
        roomRepository.save(room);
        userRepository.save(user);
        return "Check in success! Have a good day!";
    }

    public String checkOut(String userName, LocalDateTime checkOutDate) {
        try {
            Users user = userRepository.findByUserName(userName);
            Rooms room = user.getRoom();
            room.setCheckedIn(false);
            roomRepository.save(room);
            user.setRoom(null);
            user.setRoomId(null);
            user.setCheckoutDate(checkOutDate);
            userRepository.save(user);
            Contracts contract = contractRepository.findByTenantUserName(userName, checkOutDate.getYear());
            if (contract != null) {
                contract.setEndDate(checkOutDate);
                contract.setClosed(true);
            }
            return "Check out success! Have a good day!";
        } catch (Exception e) {
            return "Check out failed! Error: " + e.getMessage();
        }
    }
}
