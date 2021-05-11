package com.thesis.innmanagement.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.thesis.innmanagement.config.entities.BasicEntity;
import javax.persistence.*;
import java.util.List;

@Entity
public class Branches extends BasicEntity {

    private String location;

    private String description;

    private int numberOfStages;

    private int numberOfRooms;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "branch")
    private Users owner;

    private Long ownerId;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "branches")
    private List<Facilities> facilities;

    @ElementCollection
    @Column(updatable = false, insertable = false)
    private List<Long> facilityIds;

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public List<Long> getFacilityIds() {
        return facilityIds;
    }

    public void setFacilityIds(List<Long> facilityIds) {
        this.facilityIds = facilityIds;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getNumberOfStages() {
        return numberOfStages;
    }

    public void setNumberOfStages(int numberOfStages) {
        this.numberOfStages = numberOfStages;
    }

    public int getNumberOfRooms() {
        return numberOfRooms;
    }

    public void setNumberOfRooms(int numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }

    public Users getOwner() {
        return owner;
    }

    public void setOwner(Users owner) {
        this.owner = owner;
    }

    public List<Facilities> getFacilities() {
        return facilities;
    }

    public void setFacilities(List<Facilities> facilities) {
        this.facilities = facilities;
    }
}
