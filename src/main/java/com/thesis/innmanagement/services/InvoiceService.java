package com.thesis.innmanagement.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.thesis.innmanagement.entities.*;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.helpers.CalculateHelper;
import com.thesis.innmanagement.payload.InvoiceRequest;
import com.thesis.innmanagement.repositories.ContractRepository;
import com.thesis.innmanagement.repositories.ElectricityWaterRepository;
import com.thesis.innmanagement.repositories.InvoiceRepository;
import com.thesis.innmanagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    private MonthlyIncomeService monthlyIncomeService;

    @Autowired
    private MonthlyPaymentService monthlyPaymentService;

    @Autowired
    private RoomService roomService;

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

    public Invoices createOrUpdate(Long id, InvoiceRequest invoiceRequest) throws ResourceNotFoundException, JsonProcessingException {
        Users user = userRepository.findByUserName(invoiceRequest.getUserName());
        Contracts contract = contractRepository.findByTenantUserName(invoiceRequest.getUserName(), invoiceRequest.getPaymentDate().getYear());
        ElectricityWater electricityWater = electricityWaterRepository.findByRoomId(user.getRoomId());

        BigDecimal facilityTotal = calculateHelper.getFacilityTotalPrice(user.getRoom().getFacilities());
        BigDecimal electricityTotal = calculateHelper.getElectricityTotalPrice(electricityWater);
        BigDecimal waterTotal = calculateHelper.getWaterTotalPrice(electricityWater);

        // Rooms
        LocalDateTime lastPaymentDate = (user.getRoom().getLastPaymentDate() == null) ? user.getCheckinDate() : user.getRoom().getLastPaymentDate();
        BigDecimal roomTotal = calculateHelper.getRoomTotal(user.getRoom(), lastPaymentDate, invoiceRequest.getPaymentDate());
        Rooms updateInfoRoom = user.getRoom();
        updateInfoRoom.setLastPaymentDate(lastPaymentDate);
        updateInfoRoom.setTotal(roomTotal);
        updateInfoRoom.setBranchId(user.getRoom().getBranchId());
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String jsonRoom = ow.writeValueAsString(updateInfoRoom);
        roomService.createOrUpdate(user.getRoom().getId(), jsonRoom, null);

        List<BigDecimal> listTotalUserFee = Arrays.asList(electricityTotal, waterTotal, roomTotal);
        BigDecimal totalEarn = calculateHelper.sumList(listTotalUserFee);
        BigDecimal totalSpend = facilityTotal;

        // Monthly incomes
        MonthlyIncomes monthlyIncomes = monthlyIncomeService
                .findAllByBranchLocationAndMonth(user.getRoom().getBranch().getLocation(), invoiceRequest.getPaymentDate().getMonthValue());
        if (monthlyIncomes != null) {
            monthlyIncomes.setEarn(monthlyIncomes.getEarn().add(totalEarn));
            monthlyIncomeService.createOrUpdate(monthlyIncomes.getId(), monthlyIncomes);
        }
        else if (monthlyIncomes == null) {
            MonthlyIncomes newMonthlyIncomes = new MonthlyIncomes();
            newMonthlyIncomes.setBranchId(user.getRoom().getBranchId());
            newMonthlyIncomes.setMonth(invoiceRequest.getPaymentDate().getMonthValue());
            newMonthlyIncomes.setEarn(totalEarn);
        }

        // Monthly payments
        MonthlyPayments monthlyPayments = monthlyPaymentService
                .findAllByBranchLocationAndMonth(user.getRoom().getBranch().getLocation(), invoiceRequest.getPaymentDate().getMonthValue());
        if (monthlyPayments != null) {
            monthlyPayments.setCost(monthlyPayments.getCost().add(totalSpend));
            monthlyPaymentService.createOrUpdate(monthlyPayments.getId(), monthlyPayments);
        }
        else if (monthlyPayments == null) {
            MonthlyPayments payments = new MonthlyPayments();
            payments.setMonth(invoiceRequest.getPaymentDate().getMonthValue());
            payments.setBranchId(user.getRoom().getBranchId());
            payments.setCost(totalSpend);
            monthlyPaymentService.createOrUpdate(null, payments);
        }

        // Invoices
        Invoices invoice = new Invoices();
        invoice.setUser(user);
        invoice.setContract(contract);
        invoice.setElectricityWater(electricityWater);
        invoice.setTotal(totalEarn);
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
