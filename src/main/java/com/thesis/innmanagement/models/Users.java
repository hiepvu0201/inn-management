package com.thesis.innmanagement.models;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "tblUsers")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;

    @Column(name = "password_hash")
    private String passwordHash;

    private String email;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "id_no")
    private String idNo;

    private String sex;

    private String job;

    private String address;

    @Column(name = "phone_no")
    private String phoneNo;

    @Column(name = "checkin_date")
    private Date checkinDate;

    @Column(name = "checkout_date")
    private Date checkoutDate;

    @Column(name = "down_payment", precision = 16, scale = 4)
    private Double downPayment;

    @OneToMany(mappedBy = "user")
    private Set<Roles> roles;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "room_id", nullable = false)
    private Rooms room;

    @OneToMany(mappedBy = "user")
    private Set<ReportedIssues> reportedIssues;

    public Users() {
    }

    public Users(Long id, String username, String passwordHash, String email, String fullName, String idNo, String sex, String job, String address, String phoneNo, Date checkinDate, Date checkoutDate, Double downPayment, Set<Roles> roles, Rooms room, Set<ReportedIssues> reportedIssues) {
        this.id = id;
        this.username = username;
        this.passwordHash = passwordHash;
        this.email = email;
        this.fullName = fullName;
        this.idNo = idNo;
        this.sex = sex;
        this.job = job;
        this.address = address;
        this.phoneNo = phoneNo;
        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
        this.downPayment = downPayment;
        this.roles = roles;
        this.room = room;
        this.reportedIssues = reportedIssues;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Set<Roles> getRoles() {
        return roles;
    }

    public void setRoles(Set<Roles> roles) {
        this.roles = roles;
    }

    public Rooms getRoom() {
        return room;
    }

    public void setRoom(Rooms room) {
        this.room = room;
    }

    public Set<ReportedIssues> getReportedIssues() {
        return reportedIssues;
    }

    public void setReportedIssues(Set<ReportedIssues> reportedIssues) {
        this.reportedIssues = reportedIssues;
    }
}