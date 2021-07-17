package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Invoices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(value = "*")
@Repository
public interface InvoiceRepository extends JpaRepository<Invoices, Long> {
}
