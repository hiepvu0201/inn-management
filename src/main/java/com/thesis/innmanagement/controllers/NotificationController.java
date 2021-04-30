package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.Contracts;
import com.thesis.innmanagement.models.Notifications;
import com.thesis.innmanagement.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/notifications")
public class NotificationController {

    @Autowired
    private NotificationRepository notificationRepository;

    @GetMapping("/")
    public List<Notifications> GetAll(){
        return notificationRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notifications> GetNotificationById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        Notifications notification = notificationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Notification not found on id: "+id));
        return ResponseEntity.ok().body(notification);
    }

    @PostMapping("/")
    public Notifications Create(@Validated @RequestBody Notifications notification) throws Exception{
        return notificationRepository.save(notification);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Notifications> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Notifications notificationDetail) throws Exception{

        Notifications notification = notificationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Notification not found on id: "+ id));

        final Notifications notificationInfo = notificationRepository.save(notification);

        return ResponseEntity.ok().body(notificationInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        Notifications notification = notificationRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Notification not found on: " + id));
        notificationRepository.delete(notification);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
