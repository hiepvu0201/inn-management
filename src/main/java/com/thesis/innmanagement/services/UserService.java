package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.Rooms;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private RoomRepository roomRepository;

    public List<Users> findAll() {
        return userRepository.findAll();
    }

    public Users findById(Long id) throws ResourceNotFoundException {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found on id: " + id));
    }

    public List<Users> findAllByRoleName(String roleName) {
        return userRepository.findAllByRoleName(roleName);
    }

    public Users createOrUpdate(Long id, Users user) throws ResourceNotFoundException {
        user.setRoles(roleRepository.findAllById(user.getRoleIds()));
        if (user.getRoomId() != null) {
            user.setRoom(roomRepository.findById(user.getRoomId()).orElseThrow(() -> new ResourceNotFoundException("Room not found on id: " + user.getRoomId())));
        }
        if (id == null) {
            userRepository.save(user);
            return user;
        } else {
            Users userUpdate = userRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This user not found on:" + id));
            userUpdate.setUserName(user.getUserName());
            userUpdate.setPasswordHash(user.getPasswordHash());
            userUpdate.setEmail(user.getEmail());
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
            if (user.getRoom() != null && user.getRoomId() != null) {
                userUpdate.setRoom(user.getRoom());
                userUpdate.setRoomId(user.getRoomId());
            }
            userRepository.save(userUpdate);
            return userUpdate;
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
