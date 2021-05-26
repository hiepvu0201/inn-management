package com.thesis.innmanagement.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Rooms;
import com.thesis.innmanagement.repositories.BranchRepository;
import com.thesis.innmanagement.repositories.FacilityRepository;
import com.thesis.innmanagement.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private FacilityRepository facilityRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private FileStorageService fileStorageService;

    public List<Rooms> findAll() {
        return roomRepository.findAll();
    }

    public Rooms findById(Long id) throws ResourceNotFoundException {
        return roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room not found on id: " + id));
    }

    public Rooms createOrUpdate(Long id, String roomReq, MultipartFile images) throws ResourceNotFoundException, JsonProcessingException {

        Rooms room = new Rooms();
        ObjectMapper objectMapper = new ObjectMapper();
        room = objectMapper.readValue(roomReq, Rooms.class);

        String fileName = fileStorageService.storeFile(images);
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();

        room.setImages(fileDownloadUri);
        room.setFacilities(facilityRepository.findAllById(room.getFacilityIds()));
        Rooms finalRoom = room;
        room.setBranch(branchRepository.findById(room.getBranchId()).orElseThrow(() -> new ResourceNotFoundException("Branch not found on id: " + finalRoom.getBranchId())));
        if (id == null) {
            roomRepository.save(room);
            return room;
        } else {
            Rooms roomUpdate = roomRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This room not found on:" + id));
            roomUpdate.setRoomNo(room.getRoomNo());
            roomUpdate.setPosition(room.getPosition());
            roomUpdate.setFacilities(room.getFacilities());
            roomUpdate.setFacilityIds(room.getFacilityIds());
            roomUpdate.setBranch(room.getBranch());
            roomUpdate.setBranchId(room.getBranchId());
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

    @Transactional
    public List<Rooms> findAllByBranchLocation(String branchLocation) {
        return roomRepository.findAllByBranchLocation(branchLocation).collect(Collectors.toList());
    }
}
