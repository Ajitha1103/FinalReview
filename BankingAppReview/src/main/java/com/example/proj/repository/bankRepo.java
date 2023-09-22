package com.example.proj.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.proj.model.Bank;

public interface bankRepo extends JpaRepository<Bank, Long> {
}