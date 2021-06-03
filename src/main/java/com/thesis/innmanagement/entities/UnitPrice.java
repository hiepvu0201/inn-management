package com.thesis.innmanagement.entities;

import com.thesis.innmanagement.config.entity.BasicEntity;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class UnitPrice extends BasicEntity {

    private String name;

    private String unitPrice;

    @OneToOne
    private Branches branches;

    private String branchId;

    public Branches getBranches() {
        return branches;
    }

    public void setBranches(Branches branches) {
        this.branches = branches;
    }

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String branchId) {
        this.branchId = branchId;
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
