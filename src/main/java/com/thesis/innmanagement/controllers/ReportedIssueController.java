package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.Contracts;
import com.thesis.innmanagement.models.ReportedIssues;
import com.thesis.innmanagement.repositories.ReportedIssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/reportedissues")
public class ReportedIssueController {

    @Autowired
    private ReportedIssueRepository reportedIssueRepository;

    @GetMapping("/")
    public List<ReportedIssues> GetAll(){
        return reportedIssueRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReportedIssues> GetReportedIssueById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        ReportedIssues reportedIssue = reportedIssueRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Reported issue not found on id: "+id));
        return ResponseEntity.ok().body(reportedIssue);
    }

    @PostMapping("/")
    public ReportedIssues Create(@Validated @RequestBody ReportedIssues reportedIssue) throws Exception{
        return reportedIssueRepository.save(reportedIssue);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReportedIssues> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody ReportedIssues reportedIssueDetail) throws Exception{

        ReportedIssues reportedIssue = reportedIssueRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Reported issue not found on id: "+ id));

        final ReportedIssues reportedIssueInfo = reportedIssueRepository.save(reportedIssue);

        return ResponseEntity.ok().body(reportedIssueInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        ReportedIssues reportedIssue = reportedIssueRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Reported issue not found on: " + id));
        reportedIssueRepository.delete(reportedIssue);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
