package com.thesis.innmanagement.models;

import com.thesis.innmanagement.config.entities.BasicEntity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Users extends BasicEntity {

    private String username;

    private String passwordHash;

    private String email;

    private String fullName;

    private String idNo;

    private String sex;

    private String job;

    private String address;

    private String phoneNo;

    private Date checkinDate;

    private Date checkoutDate;

    @Column(precision = 16, scale = 4)
    private Double downPayment;

    @OneToMany(mappedBy = "user")
    private List<Roles> roles;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "room_id", nullable = false)
    private Rooms room;

    @OneToMany(mappedBy = "user")
    private List<ReportedIssues> reportedIssues;

    @ManyToOne(fetch = FetchType.LAZY)
    private Branches branch;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Contracts> contract;

    public List<Contracts> getContract() {
        return contract;
    }

    public void setContract(List<Contracts> contract) {
        this.contract = contract;
    }

    public List<Roles> getRoles() {
        return roles;
    }

    public void setRoles(List<Roles> roles) {
        this.roles = roles;
    }

    public List<ReportedIssues> getReportedIssues() {
        return reportedIssues;
    }

    public void setReportedIssues(List<ReportedIssues> reportedIssues) {
        this.reportedIssues = reportedIssues;
    }

    public Branches getBranch() {
        return branch;
    }

    public void setBranch(Branches branch) {
        this.branch = branch;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getIdNo() {
        return idNo;
    }

    public void setIdNo(String idNo) {
        this.idNo = idNo;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public Date getCheckinDate() {
        return checkinDate;
    }

    public void setCheckinDate(Date checkinDate) {
        this.checkinDate = checkinDate;
    }

    public Date getCheckoutDate() {
        return checkoutDate;
    }

    public void setCheckoutDate(Date checkoutDate) {
        this.checkoutDate = checkoutDate;
    }

    public Double getDownPayment() {
        return downPayment;
    }

    public void setDownPayment(Double downPayment) {
        this.downPayment = downPayment;
    }

    public Rooms getRoom() {
        return room;
    }

    public void setRoom(Rooms room) {
        this.room = room;
    }

}