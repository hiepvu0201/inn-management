package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Rooms;
import com.thesis.innmanagement.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping("/")
    public List<Rooms> getAll() {
        return roomService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rooms> getRoomById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(roomService.findById(id));
    }

    @GetMapping("/search-by-branch-location")
    public ResponseEntity<List<Rooms>> getRoomByBranchLocation(@Param(value = "branchLocation") String branchLocation) {
        return ResponseEntity.ok().body(roomService.findAllByBranchLocation(branchLocation));
    }

    @PostMapping("/")
    public Rooms create(@Validated @RequestPart String room,
                        @RequestPart("images") MultipartFile images) throws Exception {
        return roomService.createOrUpdate(null, room, images);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rooms> update(@PathVariable(value = "id") Long id,
                                        @Validated @RequestPart("roomDetail") String roomDetail,
                                        @RequestPart("images") MultipartFile images) throws Exception {
        Rooms room = roomService.createOrUpdate(id, roomDetail, images);
        return ResponseEntity.ok().body(room);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return roomService.delete(id);
    }
}
