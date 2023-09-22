package com.example.proj.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.proj.model.User;

public interface userRepo extends JpaRepository<User, Long> {
    User findByUsername(String username);
   // Optional<User> findByUsername(String user name);
}