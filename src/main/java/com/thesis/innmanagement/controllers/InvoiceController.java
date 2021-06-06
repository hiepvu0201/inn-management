package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.entities.Invoices;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.payload.InvoiceRequest;
import com.thesis.innmanagement.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("api/v1/invoices")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @GetMapping("/")
    public List<Invoices> findAll() {
        return invoiceService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Invoices> getInvoiceById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(invoiceService.findById(id));
    }

    @PostMapping("/")
    public Invoices create(@Validated @RequestBody InvoiceRequest invoices) throws Exception {
        return invoiceService.createOrUpdate(null, invoices);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Invoices> update(@PathVariable(value = "id") Long id,
                                           @Validated @RequestBody InvoiceRequest invoiceDetail) throws Exception {
        Invoices invoices = invoiceService.createOrUpdate(id, invoiceDetail);
        return ResponseEntity.ok().body(invoices);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return invoiceService.delete(id);
    }


}
