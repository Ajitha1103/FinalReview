package com.example.proj.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.proj.model.Bank;
import com.example.proj.repository.bankRepo;

@RestController
@RequestMapping("/api/banks")
@CrossOrigin 
public class bankController {
    @Autowired
    private bankRepo bankRepository;

    // Create a new bank
    @PostMapping
    public ResponseEntity<Bank> createBank(@RequestBody Bank bank) {
        Bank savedBank = bankRepository.save(bank);
        return ResponseEntity.ok(savedBank);
    }

    // Get all banks
    @GetMapping
    public ResponseEntity<List<Bank>> getAllBanks() {
        List<Bank> banks = bankRepository.findAll();
        return ResponseEntity.ok(banks);
    }

    // Get a bank by ID
    @GetMapping("/{id}")
    public ResponseEntity<Bank> getBankById(@PathVariable Long id) {
        Bank bank = bankRepository.findById(id).orElse(null);
        if (bank != null) {
            return ResponseEntity.ok(bank);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Update a bank by ID
    @PutMapping("/{id}")
    public ResponseEntity<Bank> updateBank(@PathVariable Long id, @RequestBody Bank updatedBank) {
        Bank existingBank = bankRepository.findById(id).orElse(null);
        if (existingBank != null) {
            existingBank.setBankname(updatedBank.getBankname());
            existingBank.setAcctype(updatedBank.getAcctype());
            existingBank.setAccholdname(updatedBank.getAccholdname());
            Bank savedBank = bankRepository.save(existingBank);
            return ResponseEntity.ok(savedBank);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a book by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBank(@PathVariable Long id) {
        Bank bank = bankRepository.findById(id).orElse(null);
        if (bank != null) {
            bankRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}