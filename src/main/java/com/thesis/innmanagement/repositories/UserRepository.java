package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.entities.enums.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.util.List;

@CrossOrigin(origins = "*")
@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    @Query("select distinct u from Users u inner join u.roles i on i.name = :roleName")
    List<Users> findAllByRoleName(@Param("roleName") ERole roleName);

    Users findByUserName(String userName);

    Boolean existsByUserName(String userName);

    Boolean existsByEmail(String email);

    @Query("select u.password from Users u where u.userName = :userName")
    String findPasswordByUserName(@Param("userName") String userName);

    @Modifying
    @Transactional
    @Query("update Users u set u.password = :password where u.userName = :userName")
    void updatePassword(@Param("userName") String userName,@Param("password") String password);
}
