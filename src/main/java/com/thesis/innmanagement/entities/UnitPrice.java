package com.thesis.innmanagement.entities;

import com.thesis.innmanagement.config.entity.BasicEntity;

import javax.persistence.Entity;

@Entity
public class UnitPrice extends BasicEntity {

    private String name;

    private String unitPrice;

    private String branchLocation;

    public String getBranchLocation() {
        return branchLocation;
    }

    public void setBranchLocation(String branchLocation) {
        this.branchLocation = branchLocation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(String unitPrice) {
        this.unitPrice = unitPrice;
    }
}
