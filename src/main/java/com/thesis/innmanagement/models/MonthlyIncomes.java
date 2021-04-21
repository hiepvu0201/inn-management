package com.thesis.innmanagement.models;

import javax.persistence.*;

@Entity
@Table
public class MonthlyIncomes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "item_name")
    private String itemName;

    @Column(precision = 16, scale = 4)
    private Double earn;

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

    public Double getEarn() {
        return earn;
    }

    public void setEarn(Double earn) {
        this.earn = earn;
    }
}
