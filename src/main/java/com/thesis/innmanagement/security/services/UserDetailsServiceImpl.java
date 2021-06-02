package com.thesis.innmanagement.security.services;

import com.thesis.innmanagement.security.services.UserDetailsImpl;
import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    @Override
    public UserDetails loadUserByUsername(String username) {
        Users user = userRepository.findByUserName(username);
        return UserDetailsImpl.build(user);
    }

}
