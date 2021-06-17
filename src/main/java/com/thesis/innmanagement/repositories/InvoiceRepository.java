package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Invoices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(value = "*")
@Repository
public interface InvoiceRepository extends JpaRepository<Invoices, Long> {
//
//   @Query(value = "select i from Invoice i inner join Users iu where iu.userName = :userName")
//   Invoices findbyUsername (String userName);
}
