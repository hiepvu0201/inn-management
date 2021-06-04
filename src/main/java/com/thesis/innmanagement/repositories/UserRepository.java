package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.util.List;

@CrossOrigin(origins = "*")
@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    @Query("select distinct u from Users u inner join Roles i on i.name = :roleName")
    List<Users> findAllByRoleName(String roleName);

    Users findByUserName(String userName);

    Boolean existsByUserName(String userName);

    Boolean existsByEmail(String email);

    @Query("select u.password from Users u where u.userName = :userName")
    String findPasswordByUserName(String userName);

    @Modifying
    @Transactional
    @Query("update Users u set u.password = :password where u.userName = :userName")
    void updatePassword(String userName, String password);
}
