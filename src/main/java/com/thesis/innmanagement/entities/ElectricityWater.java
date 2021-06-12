package com.thesis.innmanagement.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.thesis.innmanagement.config.entity.BasicEntity;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.Month;

@Entity
public class ElectricityWater extends BasicEntity {

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room")
    private Rooms room;

    private long numElectricOld;

    private long numElectricNew;

    private long numElectricConsump;

    private long numWaterOld;

    private long numWaterNew;

    private long numWaterConsump;

    private boolean isChecked;

    private Month month;

    private Long roomId;

    private BigDecimal electricityUnitPrice;

    private BigDecimal waterUnitPrice;

    private BigDecimal totalElectricity;

    private BigDecimal totalWater;

    @CreationTimestamp
    private LocalDateTime createdDate;

    @UpdateTimestamp
    private LocalDateTime updatedDate;

    public BigDecimal getTotalElectricity() {
        return (totalElectricity == null) ? BigDecimal.ZERO : totalElectricity;
    }

    public void setTotalElectricity(BigDecimal totalElectricity) {
        this.totalElectricity = totalElectricity;
    }

    public BigDecimal getTotalWater() {
        return (totalWater == null) ? BigDecimal.ZERO : totalWater;
    }

    public void setTotalWater(BigDecimal totalWater) {
        this.totalWater = totalWater;
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

    public BigDecimal getElectricityUnitPrice() {
        return (electricityUnitPrice == null) ? BigDecimal.ZERO : electricityUnitPrice;
    }

    public void setElectricityUnitPrice(BigDecimal electricityUnitPrice) {
        this.electricityUnitPrice = electricityUnitPrice;
    }

    public BigDecimal getWaterUnitPrice() {
        return (waterUnitPrice == null) ? BigDecimal.ZERO : waterUnitPrice;
    }

    public void setWaterUnitPrice(BigDecimal waterUnitPrice) {
        this.waterUnitPrice = waterUnitPrice;
    }

    public Rooms getRoom() {
        return room;
    }

    public void setRoom(Rooms room) {
        this.room = room;
    }

    public Long getRoomId() {
        return roomId;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }

    public long getNumElectricOld() {
        return numElectricOld;
    }

    public void setNumElectricOld(long numElectricOld) {
        this.numElectricOld = numElectricOld;
    }

    public long getNumElectricNew() {
        return numElectricNew;
    }

    public void setNumElectricNew(long numElectricNew) {
        this.numElectricNew = numElectricNew;
    }

    public long getNumElectricConsump() {
        return numElectricConsump;
    }

    public void setNumElectricConsump(long numElectricConsump) {
        this.numElectricConsump = numElectricConsump;
    }

    public long getNumWaterOld() {
        return numWaterOld;
    }

    public void setNumWaterOld(long numWaterOld) {
        this.numWaterOld = numWaterOld;
    }

    public long getNumWaterNew() {
        return numWaterNew;
    }

    public void setNumWaterNew(long numWaterNew) {
        this.numWaterNew = numWaterNew;
    }

    public long getNumWaterConsump() {
        return numWaterConsump;
    }

    public void setNumWaterConsump(long numWaterConsump) {
        this.numWaterConsump = numWaterConsump;
    }

    public boolean isChecked() {
        return isChecked;
    }

    public void setChecked(boolean checked) {
        isChecked = checked;
    }

    public Month getMonth() {
        return month;
    }

    public void setMonth(Month month) {
        this.month = month;
    }
}
