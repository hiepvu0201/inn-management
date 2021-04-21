package com.thesis.innmanagement.models;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table
public class Contracts {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Lob
    private String details;

    private Date signDate;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "contract")
    private List<Users> tenant;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "contract")
    private List<Users> owner;

    private int numberOfRooms;

    private int numberOfStage;

    private int voucher;

    public List<Users> getTenant() {
        return tenant;
    }

    public void setTenant(List<Users> tenant) {
        this.tenant = tenant;
    }

    public List<Users> getOwner() {
        return owner;
    }

    public void setOwner(List<Users> owner) {
        this.owner = owner;
    }

    public int getNumberOfRooms() {
        return numberOfRooms;
    }

    public void setNumberOfRooms(int numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }

    public int getNumberOfStage() {
        return numberOfStage;
    }

    public void setNumberOfStage(int numberOfStage) {
        this.numberOfStage = numberOfStage;
    }

    public int getVoucher() {
        return voucher;
    }

    public void setVoucher(int voucher) {
        this.voucher = voucher;
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
