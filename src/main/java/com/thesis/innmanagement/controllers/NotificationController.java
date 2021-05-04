package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Notifications;
import com.thesis.innmanagement.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/")
    public List<Notifications> GetAll(){
        return notificationService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notifications> GetNotificationById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        return ResponseEntity.ok().body(notificationService.findById(id));
    }

    @PostMapping("/")
    public Notifications Create(@Validated @RequestBody Notifications notification) throws Exception{
        return notificationService.createOrUpdate(null, notification);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Notifications> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Notifications notificationDetail) throws Exception{
        Notifications notification = notificationService.createOrUpdate(id, notificationDetail);
        return ResponseEntity.ok().body(notification);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return notificationService.delete(id);
    }
}
