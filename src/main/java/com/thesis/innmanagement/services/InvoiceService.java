package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.Contracts;
import com.thesis.innmanagement.entities.ElectricityWater;
import com.thesis.innmanagement.entities.Invoices;
import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.helpers.CalculateHelper;
import com.thesis.innmanagement.payload.InvoiceRequest;
import com.thesis.innmanagement.repositories.ContractRepository;
import com.thesis.innmanagement.repositories.ElectricityWaterRepository;
import com.thesis.innmanagement.repositories.InvoiceRepository;
import com.thesis.innmanagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContractRepository contractRepository;

    @Autowired
    private ElectricityWaterRepository electricityWaterRepository;

    @Autowired
    private CalculateHelper calculateHelper;

    @Autowired
    private CSVService csvService;

    public List<Invoices> findAll() {
        return invoiceRepository.findAll();
    }

    public Invoices findById(Long id) throws ResourceNotFoundException {
        return invoiceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invoice not found on id: " + id));
    }

    private Invoices update(Invoices invoiceInfo, Long id) throws ResourceNotFoundException {
        Invoices invoice = new Invoices();
        invoice.setUser(invoiceInfo.getUser());
        invoice.setContract(invoiceInfo.getContract());
        invoice.setElectricityWater(invoiceInfo.getElectricityWater());
        invoice.setTotal(invoiceInfo.getTotal());
        invoice.setPaymentDate(invoiceInfo.getPaymentDate());
        return invoice;
    }

    public Invoices createOrUpdate(Long id, InvoiceRequest invoiceRequest) throws ResourceNotFoundException {
        Users user = userRepository.findByUserName(invoiceRequest.getUserName());
        Contracts contract = contractRepository.findByTenantUserName(invoiceRequest.getUserName(), invoiceRequest.getPaymentDate().getYear());
        ElectricityWater electricityWater = electricityWaterRepository.findByRoomId(user.getRoomId());

        BigDecimal facilityTotal = calculateHelper.getFacilityTotalPrice(user.getRoom().getFacilities());
        BigDecimal electricityTotal = calculateHelper.getElectricityTotalPrice(electricityWater);
        BigDecimal waterTotal = calculateHelper.getWaterTotalPrice(electricityWater);
        LocalDateTime lastPaymentDate = (user.getRoom().getLastPaymentDate() == null) ? user.getCheckinDate() : user.getRoom().getLastPaymentDate();
        BigDecimal roomTotal = calculateHelper.getRoomTotal(user.getRoom(), lastPaymentDate, invoiceRequest.getPaymentDate());

        List<BigDecimal> listTotal = Arrays.asList(facilityTotal, electricityTotal, waterTotal, roomTotal);

        BigDecimal total = calculateHelper.sumList(listTotal);

        Invoices invoice = new Invoices();
        invoice.setUser(user);
        invoice.setContract(contract);
        invoice.setElectricityWater(electricityWater);
        invoice.setTotal(total);
        invoice.setPaymentDate(invoiceRequest.getPaymentDate());

        if (id == null) {
            invoiceRepository.save(invoice);
            return invoice;
        } else {
            Invoices invoiceUpdate = update(invoice, id);
            return invoiceRepository.save(invoiceUpdate);
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Invoices invoices = invoiceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invoice not found on: " + id));
        invoiceRepository.delete(invoices);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
