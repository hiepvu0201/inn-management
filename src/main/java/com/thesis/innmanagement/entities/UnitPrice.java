package com.thesis.innmanagement.entities;

import com.thesis.innmanagement.config.entity.BasicEntity;

import javax.persistence.Entity;
import java.math.BigDecimal;

@Entity
public class UnitPrice extends BasicEntity {

    private String name;

    private BigDecimal unitPrice;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }
}
