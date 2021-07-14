package com.thesis.innmanagement.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.thesis.innmanagement.config.entity.BasicEntity;
import com.thesis.innmanagement.entities.enums.ERoom;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
public class Rooms extends BasicEntity {

    private String roomNo;

//    private String position;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "floor")
    private Floors floor;

    private Long floorId;

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

    private String images;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @CreationTimestamp
    private LocalDateTime createdDate;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @UpdateTimestamp
    private LocalDateTime updatedDate;

    private BigDecimal priceByFirstHour;

    private BigDecimal priceByNextHour;

    private BigDecimal priceByDay;

    private BigDecimal priceByWeek;

    private BigDecimal priceByMonth;

    private BigDecimal total;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime lastPaymentDate;

    private Boolean checkedIn;

    public ERoom getRoomType() {
        return roomType;
    }

    public void setRoomType(ERoom roomType) {
        this.roomType = roomType;
    }

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

    public BigDecimal getPriceByDay() {
        return (priceByDay == null) ? BigDecimal.ZERO : priceByDay;
    }

    public void setPriceByDay(BigDecimal priceByDay) {
        this.priceByDay = priceByDay;
    }

    public BigDecimal getPriceByWeek() {
        return (priceByWeek == null) ? BigDecimal.ZERO : priceByWeek;
    }

    public void setPriceByWeek(BigDecimal priceByWeek) {
        this.priceByWeek = priceByWeek;
    }

    public BigDecimal getPriceByMonth() {
        return (priceByMonth == null) ? BigDecimal.ZERO : priceByMonth;
    }

    public void setPriceByMonth(BigDecimal priceByMonth) {
        this.priceByMonth = priceByMonth;
    }

    public LocalDateTime getLastPaymentDate() {
        return lastPaymentDate;
    }

    public void setLastPaymentDate(LocalDateTime lastPaymentDate) {
        this.lastPaymentDate = lastPaymentDate;
    }

    public BigDecimal getTotal() {
        return (total == null) ? BigDecimal.ZERO : total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public BigDecimal getPriceByFirstHour() {
        return (priceByFirstHour == null) ? BigDecimal.ZERO : priceByFirstHour;
    }

    public void setPriceByFirstHour(BigDecimal priceByFirstHour) {
        this.priceByFirstHour = priceByFirstHour;
    }

    public BigDecimal getPriceByNextHour() {
        return (priceByNextHour == null) ? BigDecimal.ZERO : priceByNextHour;
    }

    public void setPriceByNextHour(BigDecimal priceByNextHour) {
        this.priceByNextHour = priceByNextHour;
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

//    public String getPosition() {
////        return position;
////    }
////
////    public void setPosition(String position) {
////        this.position = position;
////    }

    public List<Facilities> getFacilities() {
        return facilities;
    }

    public void setFacilities(List<Facilities> facilities) {
        this.facilities = facilities;
    }

    public Floors getFloor() {
        return floor;
    }

    public void setFloor(Floors floor) {
        this.floor = floor;
    }

    public Long getFloorId() {
        return floorId;
    }

    public void setFloorId(Long floorIdId) {
        this.floorId = floorIdId;
    }

    public Boolean getCheckedIn() {
        return checkedIn;
    }

    public void setCheckedIn(Boolean checkedIn) {
        this.checkedIn = checkedIn;
    }
}