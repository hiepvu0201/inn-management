package com.thesis.innmanagement.entities;

import com.thesis.innmanagement.config.entities.BasicEntity;

import javax.persistence.*;

@Entity
public class Roles extends BasicEntity {

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    private Users user;

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
