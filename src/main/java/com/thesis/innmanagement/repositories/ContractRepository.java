package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Contracts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.util.stream.Stream;

@CrossOrigin(origins = "*")
@Repository
public interface ContractRepository extends JpaRepository<Contracts, Long> {

    @Query("select distinct c from Contracts c inner join c.owner o on o.userName = :ownerName")
    Stream<Contracts> findAllByOwnerName(String ownerName);

    @Query("select distinct c from Contracts c inner join c.tenant t on t.userName = :tenantName")
    Stream<Contracts> findAllByTenantName(String tenantName);

    @Transactional
    @Query("select distinct c from Contracts c inner join c.tenant t on t.userName = :tenantName and c.year = :year and c.isClosed = false")
    Contracts findByTenantUserName(String tenantName, int year);
}