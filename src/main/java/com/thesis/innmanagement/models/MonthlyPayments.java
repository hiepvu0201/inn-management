package com.thesis.innmanagement.models;

import javax.persistence.*;

@Entity
@Table(name = "tblMonthlyPayments")
public class MonthlyPayments {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "item_name")
    private String itemName;

    @Column(precision = 16, scale = 4)
    private Double cost;

    public MonthlyPayments() {
    }

    public MonthlyPayments(Long id, String itemName, Double cost) {
        this.id = id;
        this.itemName = itemName;
        this.cost = cost;
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
