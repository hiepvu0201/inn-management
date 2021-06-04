package com.thesis.innmanagement.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.thesis.innmanagement.Enum.ERoom;
import com.thesis.innmanagement.config.entity.BasicEntity;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Rooms extends BasicEntity {

    private String roomNo;

    private String position;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "facilities")
    private List<Facilities> facilities;

    @ElementCollection
    private List<Long> facilityIds;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch")
    private Branches branch;

    private Long branchId;

    private ERoom roomType;

    private BigDecimal priceByFirstHour;

    private BigDecimal priceByNextHour;

    private BigDecimal priceByDay;

    private BigDecimal priceByWeek;

    private BigDecimal priceByMonth;

    public BigDecimal getPriceByFirstHour() {
        return priceByFirstHour;
    }

    public void setPriceByFirstHour(BigDecimal priceByFirstHour) {
        this.priceByFirstHour = priceByFirstHour;
    }

    public BigDecimal getPriceByNextHour() {
        return priceByNextHour;
    }

    public void setPriceByNextHour(BigDecimal priceByNextHour) {
        this.priceByNextHour = priceByNextHour;
    }

    public BigDecimal getPriceByDay() {
        return priceByDay;
    }

    public void setPriceByDay(BigDecimal priceByDay) {
        this.priceByDay = priceByDay;
    }

    public BigDecimal getPriceByWeek() {
        return priceByWeek;
    }

    public void setPriceByWeek(BigDecimal priceByWeek) {
        this.priceByWeek = priceByWeek;
    }

    public BigDecimal getPriceByMonth() {
        return priceByMonth;
    }

    public void setPriceByMonth(BigDecimal priceByMonth) {
        this.priceByMonth = priceByMonth;
    }

    @Column(length = 64)
    private String images;

    @CreationTimestamp
    private LocalDateTime createdDate;

    @UpdateTimestamp
    private LocalDateTime updatedDate;

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public LocalDateTime getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(LocalDateTime updatedDate) {
        this.updatedDate = updatedDate;
    }

    public ERoom getRoomType() {
        return roomType;
    }

    public void setRoomType(ERoom roomType) {
        this.roomType = roomType;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public Branches getBranch() {
        return branch;
    }

    public void setBranch(Branches branch) {
        this.branch = branch;
    }

    public Long getBranchId() {
        return branchId;
    }

    public void setBranchId(Long branchId) {
        this.branchId = branchId;
    }

    public List<Long> getFacilityIds() {
        return facilityIds;
    }

    public void setFacilityIds(List<Long> facilityIds) {
        this.facilityIds = facilityIds;
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

    public List<Facilities> getFacilities() {
        return facilities;
    }

    public void setFacilities(List<Facilities> facilities) {
        this.facilities = facilities;
    }
}