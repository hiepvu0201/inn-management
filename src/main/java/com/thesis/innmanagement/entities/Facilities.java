package com.thesis.innmanagement.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.thesis.innmanagement.config.entities.BasicEntity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Facilities extends BasicEntity {

    private String name;

    private String quality;

    private int quantity;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "facility_branch",
            joinColumns = @JoinColumn(name = "facility_ids", referencedColumnName = "id", insertable = false, updatable = false),
            inverseJoinColumns = @JoinColumn(name = "branch_ids", referencedColumnName = "id", insertable = false, updatable = false)
    )
    private List<Branches> branches;

    @ElementCollection
    private List<Long> branchIds;

    public List<Long> getBranchIds() {
        return branchIds;
    }

    public void setBranchIds(List<Long> branchIds) {
        this.branchIds = branchIds;
    }

    public List<Branches> getBranches() {
        return branches;
    }

    public void setBranches(List<Branches> branches) {
        this.branches = branches;
    }

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
