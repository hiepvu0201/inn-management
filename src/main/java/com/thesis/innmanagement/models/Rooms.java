package com.thesis.innmanagement.models;

import com.thesis.innmanagement.config.entities.BasicEntity;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Rooms extends BasicEntity {

    private String roomNo;

    private String position;

    @OneToMany(mappedBy = "room")
    private List<Users> users;

    @OneToMany(mappedBy = "room")
    private List<Facilities> facilities;

    public String getRoomNo() {
        return roomNo;
    }

    public void setRoomNo(String roomNo) {
        this.roomNo = roomNo;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public List<Users> getUsers() {
        return users;
    }

    public void setUsers(List<Users> users) {
        this.users = users;
    }

    public List<Facilities> getFacilities() {
        return facilities;
    }

    public void setFacilities(List<Facilities> facilities) {
        this.facilities = facilities;
    }
}