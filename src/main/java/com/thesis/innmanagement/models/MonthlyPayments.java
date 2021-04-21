package com.thesis.innmanagement.models;

import javax.persistence.*;

@Entity
@Table
public class MonthlyPayments {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
