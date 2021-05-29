package com.thesis.innmanagement.entities;

import com.thesis.innmanagement.common.ERole;
import com.thesis.innmanagement.config.entity.BasicEntity;

import javax.persistence.*;

@Entity
public class Roles extends BasicEntity {

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;

    public ERole getName() {
        return name;
    }

    public void setName(ERole name) {
        this.name = name;
    }
}
