package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
}
