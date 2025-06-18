package com.example.contacts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.contacts.model.Contact;
import com.example.contacts.repository.ContactRepository;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;

    // Get all contacts
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    // Get contact by ID
    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    // Save contact
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    // Add or update contact
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}
