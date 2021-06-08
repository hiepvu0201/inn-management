package com.thesis.innmanagement.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.jayway.jsonpath.internal.function.numeric.Min;
import com.thesis.innmanagement.config.entity.BasicEntity;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Contracts extends BasicEntity {

    @Lob
    private String details;

    private LocalDateTime signDate;

    private LocalDateTime endDate;

    @Column(columnDefinition = "default false")
    private Boolean isClosed;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tenant")
    private Users tenant;

    private Long tenantId;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    private Users owner;

    private Long ownerId;

    private int numberOfRooms;

    private int numberOfStage;

    private int voucher;

    private int year;

    @CreationTimestamp
    private LocalDateTime createdDate;

    @UpdateTimestamp
    private LocalDateTime updatedDate;

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public LocalDateTime getSignDate() {
        return signDate;
    }

    public void setSignDate(LocalDateTime signDate) {
        this.signDate = signDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public Boolean getClosed() {
        return (isClosed == null) ? false : isClosed;
    }

    public void setClosed(Boolean closed) {
        isClosed = closed;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public Users getOwner() {
        return owner;
    }

    public void setOwner(Users owner) {
        this.owner = owner;
    }

    public Long getTenantId() {
        return tenantId;
    }

    public void setTenantId(Long tenantId) {
        this.tenantId = tenantId;
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

    public Users getTenant() {
        return tenant;
    }

    public void setTenant(Users tenant) {
        this.tenant = tenant;
    }

    public int getNumberOfRooms() {
        return numberOfRooms;
    }

    public void setNumberOfRooms(int numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }

    public int getNumberOfStage() {
        return numberOfStage;
    }

    public void setNumberOfStage(int numberOfStage) {
        this.numberOfStage = numberOfStage;
    }

    public int getVoucher() {
        return voucher;
    }

    public void setVoucher(int voucher) {
        this.voucher = voucher;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

}
