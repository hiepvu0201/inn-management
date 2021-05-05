package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.ReportedIssues;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "*")
public interface ReportedIssueRepository extends JpaRepository<ReportedIssues, Long> {
}
