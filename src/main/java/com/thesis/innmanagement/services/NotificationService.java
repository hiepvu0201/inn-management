package com.thesis.innmanagement.services;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Notifications;
import com.thesis.innmanagement.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public List<Notifications> findAll() {
        return notificationRepository.findAll();
    }

    public Notifications findById(Long id) throws ResourceNotFoundException {
        return notificationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Notifications not found on id: "+id));
    }

    public Notifications createOrUpdate(Long id, Notifications notification) throws ResourceNotFoundException {
        if(id == null) {
            notificationRepository.save(notification);
            return notification;
        }
        else {
            Notifications notificationUpdate = notificationRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This notification not found on:" + id));
            notificationUpdate.setName(notification.getName());
            notificationUpdate.setDescription(notification.getDescription());
            notificationRepository.save(notificationUpdate);
            return notificationUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Notifications notification = notificationRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Notification not found on: " + id));
        notificationRepository.delete(notification);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
