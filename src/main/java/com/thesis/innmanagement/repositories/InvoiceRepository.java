package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Invoices;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository extends JpaRepository<Invoices, Long> {
}
