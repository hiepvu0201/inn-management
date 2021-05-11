package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Contracts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "*")
@Repository
public interface ContractRepository extends JpaRepository<Contracts, Long> {

    @Query("select distinct c from Contracts c inner join Users u on u.username = :ownerName")
    List<Contracts> findAllByOwnerName(String ownerName);

    @Query("select distinct c from Contracts c inner join Users u on u.username = :tenantName")
    List<Contracts> findAllByTenantName(String tenantName);
}
