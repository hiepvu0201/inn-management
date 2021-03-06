package com.thesis.innmanagement.services;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.ReportedIssues;
import com.thesis.innmanagement.repositories.ReportedIssueRepository;
import com.thesis.innmanagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ReportedIssueService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReportedIssueRepository reportedIssueRepository;

    public List<ReportedIssues> findAll() {
        return reportedIssueRepository.findAll();
    }

    public ReportedIssues findById(Long id) throws ResourceNotFoundException {
        return reportedIssueRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Reported Issues not found on id: " + id));
    }

    public ReportedIssues createOrUpdate(Long id, ReportedIssues reportedIssue) throws ResourceNotFoundException {
        reportedIssue.setReporter(userRepository.findById(reportedIssue.getReporterId()).orElseThrow(() -> new ResourceNotFoundException("Reporter not found on id:" + reportedIssue.getReporterId())));
        if (id == null) {
            reportedIssueRepository.save(reportedIssue);
            return reportedIssue;
        } else {
            ReportedIssues reportedIssuesUpdate = reportedIssueRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This reported issue not found on:" + id));
            reportedIssuesUpdate.setTitle(reportedIssue.getTitle());
            reportedIssuesUpdate.setDescription(reportedIssue.getDescription());
            reportedIssuesUpdate.setStatus(reportedIssue.getStatus());
            reportedIssuesUpdate.setReporterId(reportedIssue.getReporterId());
            reportedIssuesUpdate.setReporter(reportedIssue.getReporter());
            reportedIssueRepository.save(reportedIssuesUpdate);
            return reportedIssuesUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        ReportedIssues reportedIssue = reportedIssueRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Reported issue not found on: " + id));
        reportedIssueRepository.delete(reportedIssue);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
