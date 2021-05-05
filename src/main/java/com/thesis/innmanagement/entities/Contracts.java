package com.thesis.innmanagement.entities;

import com.thesis.innmanagement.config.entities.BasicEntity;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
public class Contracts extends BasicEntity {

    @Lob
    private String details;

    private Date signDate;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "contracts")
    private List<Users> tenant;

    @ElementCollection
    @Column(updatable = false, insertable = false)
    private List<Long> tenantIds;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "contracts")
    private List<Users> owner;

    @ElementCollection
    @Column(updatable = false, insertable = false)
    private List<Long> ownerIds;

    private int numberOfRooms;

    private int numberOfStage;

    private int voucher;

    public List<Long> getTenantIds() {
        return tenantIds;
    }

    public void setTenantIds(List<Long> tenantIds) {
        this.tenantIds = tenantIds;
    }

    public List<Long> getOwnerIds() {
        return ownerIds;
    }

    public void setOwnerIds(List<Long> ownerIds) {
        this.ownerIds = ownerIds;
    }

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
