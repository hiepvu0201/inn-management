package com.thesis.innmanagement.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.thesis.innmanagement.config.entities.BasicEntity;

import javax.persistence.*;

@Entity
public class ElectricityWater extends BasicEntity {

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "electricityWater")
    private Rooms room;

    private long numElectricOld;

    private long numElectricNew;

    private long numElectricConsump;

    private long numWaterOld;

    private long numWaterNew;

    private long numWaterConsump;

    private boolean isChecked;

    private int month;

    private Long roomId;

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

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }
}
