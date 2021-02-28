package com.thesis.innmanagement.models;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "tblContracts")
public class Contracts {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Lob
    private String details;

    @Column(name = "sign_date")
    private Date signDate;

    public Contracts() {
    }

    public Contracts(Long id, String details, Date signDate) {
        this.id = id;
        this.details = details;
        this.signDate = signDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Date getSignDate() {
        return signDate;
    }

    public void setSignDate(Date signDate) {
        this.signDate = signDate;
    }
}
