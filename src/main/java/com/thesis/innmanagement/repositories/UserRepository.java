package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "*")
@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    @Query("select distinct u from Users u inner join Roles i on i.name = :roleName")
    List<Users> findAllByRoleName(String roleName);

    Users findByUserName(String userName);

    Boolean existsByUserName(String userName);

    Boolean existsByEmail(String email);
}
