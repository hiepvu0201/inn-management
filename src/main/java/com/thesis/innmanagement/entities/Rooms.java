package com.thesis.innmanagement.entities;

import com.thesis.innmanagement.config.entities.BasicEntity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Rooms extends BasicEntity {

    private String roomNo;

    private String position;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Users> users;

    @ElementCollection
    @Column(insertable = false, updatable = false)
    private List<Long> userIds;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Facilities> facilities;

    @ElementCollection
    @Column(insertable = false, updatable = false)
    private List<Long> facilityIds;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private ElectricityWater electricityWater;

    @Column(updatable = false, insertable = false)
    private Long electricityWaterId;

    public List<Long> getUserIds() {
        return userIds;
    }

    public void setUserIds(List<Long> userIds) {
        this.userIds = userIds;
    }

    public List<Long> getFacilityIds() {
        return facilityIds;
    }

    public void setFacilityIds(List<Long> facilityIds) {
        this.facilityIds = facilityIds;
    }

    public ElectricityWater getElectricityWater() {
        return electricityWater;
    }

    public void setElectricityWater(ElectricityWater electricityWater) {
        this.electricityWater = electricityWater;
    }

    public Long getElectricityWaterId() {
        return electricityWaterId;
    }

    public void setElectricityWaterId(Long electricityWaterId) {
        this.electricityWaterId = electricityWaterId;
    }

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