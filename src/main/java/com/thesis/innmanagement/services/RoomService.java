package com.thesis.innmanagement.services;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Rooms;
import com.thesis.innmanagement.repositories.FacilityRepository;
import com.thesis.innmanagement.repositories.RoomRepository;
import com.thesis.innmanagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FacilityRepository facilityRepository;

    public List<Rooms> findAll() {
        return roomRepository.findAll();
    }

    public Rooms findById(Long id) throws ResourceNotFoundException {
        return roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room not found on id: " + id));
    }

    public Rooms createOrUpdate(Long id, Rooms room) throws ResourceNotFoundException {
        room.setUsers(userRepository.findAllById(room.getUserIds()));
        room.setFacilities(facilityRepository.findAllById(room.getFacilityIds()));
        if (id == null) {
            roomRepository.save(room);
            return room;
        } else {
            Rooms roomUpdate = roomRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This room not found on:" + id));
            roomUpdate.setRoomNo(room.getRoomNo());
            roomUpdate.setPosition(room.getPosition());
            roomUpdate.setUsers(room.getUsers());
            roomUpdate.setUserIds(room.getUserIds());
            roomUpdate.setFacilities(room.getFacilities());
            roomUpdate.setFacilityIds(room.getFacilityIds());
            roomRepository.save(roomUpdate);
            return roomUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Rooms room = roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room not found on: " + id));
        roomRepository.delete(room);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    public List<Rooms> findAllByUserName(String userName) {
        return roomRepository.findAllByUserName(userName);
    }
}
