package com.thesis.innmanagement.helpers;

import com.thesis.innmanagement.entities.Invoices;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.apache.commons.csv.QuoteMode;

@Service
public class CSVHelper {

    public static ByteArrayInputStream invoiceToCSV(List<Invoices> invoices) {
        final CSVFormat format = CSVFormat.DEFAULT.withQuoteMode(QuoteMode.MINIMAL);

        try (ByteArrayOutputStream out = new ByteArrayOutputStream();
             CSVPrinter csvPrinter = new CSVPrinter(new PrintWriter(out), format);) {
            for (Invoices invoice : invoices) {
                List<String> data = Arrays.asList(
                        String.valueOf(invoice.getId()),
                        invoice.getUser().getUserName(),
                        invoice.getUser().getFullName(),
                        invoice.getUser().getEmail(),
                        invoice.getUser().getSex(),
                        invoice.getUser().getJob(),
                        invoice.getUser().getAddress(),
                        invoice.getUser().getImages(),
                        invoice.getUser().getPhoneNo(),
                        String.valueOf(invoice.getUser().getDownPayment()),
                        invoice.getUser().getRoom().getRoomNo(),
                        invoice.getUser().getRoom().getImages(),
                        invoice.getUser().getRoom().getPosition(),
                        String.valueOf(invoice.getUser().getRoom().getLastPaymentDate()),
                        String.valueOf(invoice.getUser().getRoom().getRoomType()),
                        String.valueOf(invoice.getUser().getRoom().getPriceByFirstHour()),
                        String.valueOf(invoice.getUser().getRoom().getPriceByNextHour()),
                        String.valueOf(invoice.getUser().getRoom().getPriceByDay()),
                        String.valueOf(invoice.getUser().getRoom().getPriceByWeek()),
                        String.valueOf(invoice.getUser().getRoom().getPriceByMonth()),
                        String.valueOf(invoice.getUser().getRoom().getTotal()),
                        invoice.getContract().getOwner().getFullName(),
                        invoice.getContract().getOwner().getPhoneNo(),
                        String.valueOf(invoice.getElectricityWater().getMonth()),
                        String.valueOf(invoice.getElectricityWater().getNumElectricOld()),
                        String.valueOf(invoice.getElectricityWater().getNumElectricNew()),
                        String.valueOf(invoice.getElectricityWater().getNumElectricConsump()),
                        String.valueOf(invoice.getElectricityWater().getElectricityUnitPrice()),
                        String.valueOf(invoice.getElectricityWater().getTotalElectricity()),
                        String.valueOf(invoice.getElectricityWater().getNumWaterOld()),
                        String.valueOf(invoice.getElectricityWater().getNumWaterNew()),
                        String.valueOf(invoice.getElectricityWater().getNumWaterConsump()),
                        String.valueOf(invoice.getElectricityWater().getWaterUnitPrice()),
                        String.valueOf(invoice.getElectricityWater().getTotalWater()),
                        String.valueOf(invoice.getTotal()),
                        String.valueOf(invoice.getPaymentDate())
                        );
                csvPrinter.printRecord(data);
            }

            csvPrinter.flush();
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            throw new RuntimeException("fail to import data to CSV file: " + e.getMessage());
        }
    }

}
