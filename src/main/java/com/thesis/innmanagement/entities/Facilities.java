package com.thesis.innmanagement.entities;

import com.thesis.innmanagement.config.entity.BasicEntity;

import javax.persistence.*;

@Entity
public class Facilities extends BasicEntity {

    private String name;

    private String quality;

    private int quantity;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getQuality() {
        return quality;
    }

    public void setQuality(String quality) {
        this.quality = quality;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
