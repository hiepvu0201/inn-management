package com.thesis.innmanagement.models;

import javax.persistence.*;

@Table
@Entity
public class ElectricityWater {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String roomNo;

    private long numElectricOld;

    private long numElectricNew;

    private long numElectricConsump;

    private long numWaterOld;

    private long numWaterNew;

    private long numWaterConsump;

    private boolean isChecked;

    private int month;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoomNo() {
        return roomNo;
    }

    public void setRoomNo(String roomNo) {
        this.roomNo = roomNo;
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
