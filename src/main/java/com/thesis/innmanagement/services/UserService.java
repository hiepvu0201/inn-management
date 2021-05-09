package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.Branches;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Roles;
import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private ContractRepository contractRepository;

    @Autowired
    private ReportedIssueRepository reportedIssueRepository;

    public List<Users> findAll() {
        return userRepository.findAll();
    }

    public Users findById(Long id) throws ResourceNotFoundException {
        return userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not found on id: "+id));
    }

    public Users createOrUpdate(Long id, Users user) throws ResourceNotFoundException {
        user.setRoles(roleRepository.findAllById(user.getRoleIds()));
        user.setReportedIssues(reportedIssueRepository.findAllById(user.getReportedIssueIds()));
        if(id == null) {
            userRepository.save(user);
            return user;
        }
        else {
            Users userUpdate = userRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This user not found on:" + id));
            userUpdate.setUsername(user.getUsername());
            userUpdate.setPasswordHash(user.getPasswordHash());
            userUpdate.setEmail(user.getEmail());
            userUpdate.setFullName(user.getFullName());
            userUpdate.setIdNo(user.getIdNo());
            userUpdate.setSex(user.getSex());
            userUpdate.setJob(user.getJob());
            userUpdate.setAddress(user.getAddress());
            userUpdate.setPhoneNo(user.getPhoneNo());
            userUpdate.setCheckinDate(user.getCheckinDate());
            userUpdate.setCheckoutDate(user.getCheckoutDate());
            userUpdate.setDownPayment(user.getDownPayment());
            userUpdate.setRoles(user.getRoles());
            userUpdate.setReportedIssues(user.getReportedIssues());
            userRepository.save(userUpdate);
            return userUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Users user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found on: " + id));
        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
