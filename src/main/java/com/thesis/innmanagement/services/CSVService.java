package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.Invoices;
import com.thesis.innmanagement.helpers.CSVHelper;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.util.Arrays;
import java.util.List;

@Service
public class CSVService {

    public ByteArrayInputStream loadInvoice(Invoices invoice) {
        List<Invoices> lstInvoice = Arrays.asList(invoice);
        ByteArrayInputStream in = CSVHelper.invoiceToCSV(lstInvoice);
        return in;
    }

    public ByteArrayInputStream loadListInvoice(List<Invoices> lstInvoice) {
        ByteArrayInputStream in = CSVHelper.invoiceToCSV(lstInvoice);
        return in;
    }
}
