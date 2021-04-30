package com.thesis.innmanagement.models;

import com.thesis.innmanagement.config.entities.BasicEntity;

import javax.persistence.*;

@Entity
public class MonthlyPayments extends BasicEntity {

    private String itemName;

    @Column(precision = 16, scale = 4)
    private Double cost;

    @ManyToOne(fetch = FetchType.LAZY)
    private Branches branch;

    public Branches getBranch() {
        return branch;
    }

    public void setBranch(Branches branch) {
        this.branch = branch;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }
}
