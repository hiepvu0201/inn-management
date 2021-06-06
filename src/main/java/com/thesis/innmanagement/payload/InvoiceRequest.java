package com.thesis.innmanagement.payload;

import java.time.LocalDateTime;

public class InvoiceRequest {

    private String userName;

    private LocalDateTime paymentDate;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public LocalDateTime getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDateTime paymentDate) {
        this.paymentDate = paymentDate;
    }
}
