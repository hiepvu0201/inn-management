package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.ReportedIssues;
import com.thesis.innmanagement.services.ReportedIssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/reported-issues")
public class ReportedIssueController {

    @Autowired
    private ReportedIssueService reportedIssueService;

    @GetMapping("/")
    public List<ReportedIssues> getAll() {
        return reportedIssueService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReportedIssues> getReportedIssueById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(reportedIssueService.findById(id));
    }

    @PostMapping("/")
    public ReportedIssues create(@Validated @RequestBody ReportedIssues reportedIssue) throws Exception {
        return reportedIssueService.createOrUpdate(null, reportedIssue);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReportedIssues> update(@PathVariable(value = "id") Long id, @Validated @RequestBody ReportedIssues reportedIssueDetail) throws Exception {
        ReportedIssues reportedIssue = reportedIssueService.createOrUpdate(id, reportedIssueDetail);
        return ResponseEntity.ok().body(reportedIssue);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return reportedIssueService.delete(id);
    }
}
