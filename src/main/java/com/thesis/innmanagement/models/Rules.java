package com.thesis.innmanagement.models;

import com.thesis.innmanagement.config.entities.BasicEntity;

import javax.persistence.*;

@Entity
public class Rules extends BasicEntity {

    private String name;

    @Lob
    private String description;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
