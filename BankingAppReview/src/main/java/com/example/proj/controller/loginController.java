package com.example.proj.controller;

import com.example.proj.model.User;
import com.example.proj.repository.userRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
@CrossOrigin
public class loginController {
    @Autowired
    private userRepo userRepository;

    @PostMapping
    public ResponseEntity<String> login(@RequestBody User user) {
        // Find the user by user name and check if the password matches
        User existingUser = userRepository.findByUsername(user.getUsername());

        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            // Authentication successful
            return ResponseEntity.ok("Login successful"); // You can also return user details here
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }
}