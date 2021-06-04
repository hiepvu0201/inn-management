package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.Enum.ERole;
import com.thesis.innmanagement.entities.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "*")
public interface RoleRepository extends JpaRepository<Roles, Long> {
    Roles findByName(ERole name);
}
