package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Rooms;
import com.thesis.innmanagement.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping("/")
    public List<Rooms> getAll(){
        return roomService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rooms> getRoomById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(roomService.findById(id));
    }

    @GetMapping("/search-by-username")
    public ResponseEntity<List<Rooms>> getRoomByUserName(@Param(value = "username") String userName) {
        return ResponseEntity.ok().body(roomService.findAllByUserName(userName));
    }

    @PostMapping("/")
    public Rooms create(@Validated @RequestBody Rooms room) throws Exception{
        return roomService.createOrUpdate(null, room);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rooms> update(@PathVariable(value = "id") Long id, @Validated @RequestBody Rooms roomDetail) throws Exception{
        Rooms room = roomService.createOrUpdate(id, roomDetail);
        return ResponseEntity.ok().body(room);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return roomService.delete(id);
    }
}
