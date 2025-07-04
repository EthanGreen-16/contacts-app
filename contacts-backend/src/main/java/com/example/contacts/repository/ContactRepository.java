package com.example.contacts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.contacts.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    
}
