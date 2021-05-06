package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Notifications;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "*")
public interface NotificationRepository extends JpaRepository<Notifications, Long> {
}
