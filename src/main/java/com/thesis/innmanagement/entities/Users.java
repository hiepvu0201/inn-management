package com.thesis.innmanagement.entities;

import com.thesis.innmanagement.config.entities.BasicEntity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;;

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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    private List<Roles> roles;

    @ElementCollection
    @Column(insertable = false, updatable = false)
    private List<Long> roleIds;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    private Branches branch;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinColumns({
        @JoinColumn(name = "owner_id"),
        @JoinColumn(name = "tenant_id")
    })
    private List<Contracts> contracts;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "reporter")
    private List<ReportedIssues> reportedIssues;

    @ElementCollection
    @Column(insertable = false, updatable = false)
    private List<Long> reportedIssueIds;

    public List<Long> getRoleIds() {
        return roleIds;
    }

    public void setRoleIds(List<Long> roleIds) {
        this.roleIds = roleIds;
    }

    public List<Long> getReportedIssueIds() {
        return reportedIssueIds;
    }

    public void setReportedIssueIds(List<Long> reportedIssueIds) {
        this.reportedIssueIds = reportedIssueIds;
    }

    public Branches getBranch() {
        return branch;
    }

    public void setBranch(Branches branch) {
        this.branch = branch;
    }

    public List<Contracts> getContracts() {
        return contracts;
    }

    public void setContracts(List<Contracts> contracts) {
        this.contracts = contracts;
    }

    public List<ReportedIssues> getReportedIssues() {
        return reportedIssues;
    }

    public void setReportedIssues(List<ReportedIssues> reportedIssues) {
        this.reportedIssues = reportedIssues;
    }

    public List<Roles> getRoles() {
        return roles;
    }

    public void setRoles(List<Roles> roles) {
        this.roles = roles;
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
}