package com.thesis.innmanagement.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.thesis.innmanagement.Enum.EMonth;
import com.thesis.innmanagement.config.entity.BasicEntity;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

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

    private EMonth month;

    private Long roomId;

    private BigDecimal ElectricityUnitPrice;

    private BigDecimal WaterUnitPrice;

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

    public BigDecimal getElectricityUnitPrice() {
        return ElectricityUnitPrice;
    }

    public void setElectricityUnitPrice(BigDecimal electricityUnitPrice) {
        ElectricityUnitPrice = electricityUnitPrice;
    }

    public BigDecimal getWaterUnitPrice() {
        return WaterUnitPrice;
    }

    public void setWaterUnitPrice(BigDecimal waterUnitPrice) {
        WaterUnitPrice = waterUnitPrice;
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

    public EMonth getMonth() {
        return month;
    }

    public void setMonth(EMonth month) {
        this.month = month;
    }
}
