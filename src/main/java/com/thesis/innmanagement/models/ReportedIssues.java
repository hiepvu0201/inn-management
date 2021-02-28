package com.thesis.innmanagement.models;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "tblReportedIssues")
public class ReportedIssues {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String reporter;

    private String title;

    @Lob
    private String description;

    private String status;

    @CreationTimestamp
    @Column(name = "reported_date")
    private Timestamp reportedDate;

    @UpdateTimestamp
    @Column(name = "solved_date")
    private Timestamp solvedDate;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;

    public ReportedIssues() {
    }

    public ReportedIssues(Long id, String reporter, String title, String description, String status, Timestamp reportedDate, Timestamp solvedDate, Users user) {
        this.id = id;
        this.reporter = reporter;
        this.title = title;
        this.description = description;
        this.status = status;
        this.reportedDate = reportedDate;
        this.solvedDate = solvedDate;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReporter() {
        return reporter;
    }

    public void setReporter(String reporter) {
        this.reporter = reporter;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Timestamp getReportedDate() {
        return reportedDate;
    }

    public void setReportedDate(Timestamp reportedDate) {
        this.reportedDate = reportedDate;
    }

    public Timestamp getSolvedDate() {
        return solvedDate;
    }

    public void setSolvedDate(Timestamp solvedDate) {
        this.solvedDate = solvedDate;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
