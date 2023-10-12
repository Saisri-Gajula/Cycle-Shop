package com.cycle.rental.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cycle.rental.entity.Cycles;
import com.cycle.rental.service.CycleService;
import com.cycle.rental.service.DomainUserService;
import com.cycle.rental.service.RegistrationForm;

import io.swagger.v3.oas.annotations.parameters.RequestBody;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class CycleRestController {
    
    @Autowired
    private CycleService cycleService;

    @Autowired
    private DomainUserService domainUserService;

    @GetMapping("/health")
    public String checkhealth() {
        return "healthy";
    }

    @GetMapping("/cycle/list")
    public List<Cycles> all(Authentication authentication) {
        Jwt jwt = (Jwt) authentication.getPrincipal();
        System.out.println(jwt.getClaimAsString("scope"));
        return cycleService.listAvailableCycles();
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegistrationForm registrationForm) {
        try {
            String username = registrationForm.getUsername();
            String password = registrationForm.getPassword();
            // Check if the username and password are both "admin"
            if ("admin".equals(username) && "admin".equals(password)) {
                registrationForm.setRole("ADMIN");
            } else {
                registrationForm.setRole("USER");
            }

            if (domainUserService.getByName(registrationForm.getUsername()).isPresent()) {

               
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");

 

            }

 

            if (!registrationForm.getPassword().equals(registrationForm.getRepeatPassword())) {

               

                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Password doesnot match");

 

            }

            System.out.println(domainUserService.save(registrationForm.getUsername(), registrationForm.getPassword(),

                    registrationForm.getRole()));

           

            return ResponseEntity.ok("User registered successfully");

 

        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed: " + e.getMessage());

 

        }

    }

    



}