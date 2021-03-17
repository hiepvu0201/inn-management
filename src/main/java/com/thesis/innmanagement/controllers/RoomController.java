package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.ReportedIssues;
import com.thesis.innmanagement.models.Rooms;
import com.thesis.innmanagement.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/rooms")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping("/")
    public List<Rooms> GetAll(){
        return roomRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rooms> GetRoomById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        Rooms room = roomRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Room not found in id: " + id));
        return ResponseEntity.ok().body(room);
    }

    @PostMapping("/")
    public Rooms Create(@Validated @RequestBody Rooms room) throws Exception{
        return roomRepository.save(room);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rooms> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Rooms roomDetail) throws Exception{

        Rooms room = roomRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Room not found on id: "+ id));

        final Rooms roomInfo = roomRepository.save(room);

        return ResponseEntity.ok().body(roomInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        Rooms room = roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room not found on: " + id));
        roomRepository.delete(room);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
