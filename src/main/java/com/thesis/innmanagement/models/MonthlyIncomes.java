package com.thesis.innmanagement.models;

import javax.persistence.*;

@Entity
@Table(name = "tblMonthlyIncomes")
public class MonthlyIncomes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "item_name")
    private String itemName;

    @Column(precision = 16, scale = 4)
    private Double earn;

    public MonthlyIncomes() {
    }

    public MonthlyIncomes(Long id, String itemName, Double earn) {
        this.id = id;
        this.itemName = itemName;
        this.earn = earn;
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

    public Double getEarn() {
        return earn;
    }

    public void setEarn(Double earn) {
        this.earn = earn;
    }
}
