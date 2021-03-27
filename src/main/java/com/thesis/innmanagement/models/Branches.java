package com.thesis.innmanagement.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Branches {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String location;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "branch")
    private List<Users> tenant;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "branch")
    private List<Users> owner;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "branch")
    private List<Facilities> facility;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "branch")
    private List<MonthlyIncomes> monthlyIncome;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "branch")
    private List<MonthlyPayments> monthlyPayment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<Users> getTenant() {
        return tenant;
    }

    public void setTenant(List<Users> tenant) {
        this.tenant = tenant;
    }

    public List<Users> getOwner() {
        return owner;
    }

    public void setOwner(List<Users> owner) {
        this.owner = owner;
    }

    public List<Facilities> getFacility() {
        return facility;
    }

    public void setFacility(List<Facilities> facility) {
        this.facility = facility;
    }

    public List<MonthlyIncomes> getMonthlyIncome() {
        return monthlyIncome;
    }

    public void setMonthlyIncome(List<MonthlyIncomes> monthlyIncome) {
        this.monthlyIncome = monthlyIncome;
    }

    public List<MonthlyPayments> getMonthlyPayment() {
        return monthlyPayment;
    }

    public void setMonthlyPayment(List<MonthlyPayments> monthlyPayment) {
        this.monthlyPayment = monthlyPayment;
    }
}
