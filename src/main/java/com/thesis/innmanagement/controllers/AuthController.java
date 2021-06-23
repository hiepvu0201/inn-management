package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.entities.enums.ERole;
import com.thesis.innmanagement.entities.Roles;
import com.thesis.innmanagement.entities.Users;
import com.thesis.innmanagement.payload.SignInRequest;
import com.thesis.innmanagement.security.services.UserDetailsImpl;
import com.thesis.innmanagement.payload.JwtResponse;
import com.thesis.innmanagement.payload.SignUpRequest;
import com.thesis.innmanagement.repositories.RoleRepository;
import com.thesis.innmanagement.repositories.UserRepository;
import com.thesis.innmanagement.security.jwt.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3000)
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Validated @RequestBody SignInRequest signInRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequest.getUserName(), signInRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtil.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item->item.getAuthority())
                .collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Validated @RequestBody SignUpRequest signUpRequest) {
        if (userRepository.existsByUserName(signUpRequest.getUserName())) {
            return ResponseEntity.badRequest().body("Lỗi: Người dùng đã tồn tại!");
        }
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body("Lỗi: Email đã tồn tại!");
        }
        Users user = new Users();
        user.setUserName(signUpRequest.getUserName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));
        Roles role = roleRepository.findByName(ERole.ROLE_USER);
        if (role == null) {
            Roles roles = new Roles();
            role.setName(ERole.ROLE_USER);
            roleRepository.save(roles);
            user.setRoles(Arrays.asList(roles));
        }
        else user.setRoles(Arrays.asList(role));
        userRepository.save(user);
        return ResponseEntity.ok("Đăng ký thành công!");
    }
}
