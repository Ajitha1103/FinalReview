package com.example.proj.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.proj.model.User;
import com.example.proj.repository.userRepo;

@RestController
@RequestMapping("/api/signup")
@CrossOrigin
public class signupController {
    @Autowired
    private userRepo userRepository;

    @PostMapping
    public ResponseEntity<?> signup(@Validated @RequestBody User user, BindingResult result) {
        // Validate user input
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMap);
        }

        // Check if the user name or email already exists
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null) {
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("username", "Username already exists");
            return ResponseEntity.badRequest().body(errorMap);
        }

        // You can add more validation logic here (e.g., password requirements)

        // Save the user if validation passes
        userRepository.save(user);
        return ResponseEntity.ok("Signup successful");
    }
}