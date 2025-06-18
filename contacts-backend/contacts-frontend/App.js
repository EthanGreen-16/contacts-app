/*
  TODO:
  ------------------------------------------------------
    Add validation to email:
      Connect to database
*/


import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    email: ''
});
  const [sortOption,setSortOption] = useState("idAsc");

  function handleChange(e) {
    setNewContact({ ...newContact, [e.target.name]: e.target.value});
  }

  function handleDelete(id) {
    fetch(`http://localhost:8080/api/contacts/${id}`, {
      method: "DELETE"
    })
    .then(response => {
      if(!response.ok) throw new Error ("Failed to delete contact");
      setContacts(prev => prev.filter(c => c.id !== id));
    })
    .catch(err => console.error("Delete error:", err))
  }

  function handleSubmit(e) {
  e.preventDefault();

  if(!newContact.email.trim()) {
    alert("Email is required.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(newContact.email);
  console.log(emailRegex.test(newContact.email));
  console.log(emailRegex);
  if(!emailRegex.test(newContact.email)) {
    alert("Please enter a valid email");
    return;
  }

  fetch("http://localhost:8080/api/contacts", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newContact)
  })
    .then(res => {
      if(!res.ok) throw new Error("Failed to add contact.");
      return res.json();
    })
    .then(addedContact => {
      setContacts(prev => [...prev, addedContact]);
      setNewContact({firstName: '', lastName: '', email: ''});
    })
    .catch(err => console.error("Add contact error: ", err));
  }

  const sortFunctions = {
    firstName: (a,b) => a.firstName.localeCompare(b.firstName),
    lastName: (a,b) => a.lastName.localeCompare(b.lastName),
    email: (a,b) => {
      const domainA = a.email.split("@")[1] || "";
      const domainB = b.email.split("@")[1] || "";
      return domainA.localeCompare(domainB);
    },
    idAsc: (a,b) => a.id - b.id,
    idDesc: (a,b) => b.id - a.id,
  }


  useEffect(() => {
    fetch("http://localhost:8080/api/contacts")
      .then(response => {
        if(!response.ok) throw new Error("Failed to fetch contacts");
        return response.json();
      })
      .then(data => setContacts(data))
      .catch(err => console.error(err));
  }, []);

  <h2>Debug: App Loaded</h2>
  return (
    <div>
      <h1 className='App'>Contact List</h1>
      <form onSubmit={handleSubmit} className='contact-form'>
         
        <input
          type="text"
          name ="firstName"
          placeholder='First Name'
          value={newContact.firstName}
          onChange={handleChange}
          className='input'
          required
        />

        <input
          type="text"
          name ="lastName"
          placeholder='Last Name'
          value={newContact.lastName}
          onChange={handleChange}
          className='input2'
          required
        />

        <input
          type="text"
          name ="email"
          placeholder='Email'
          value={newContact.email}
          onChange={handleChange}
          className='input'
          required
        />

        <button type='submit'>Add Contact</button>
      </form>










      <div className='drop-down-div'>
        <label>Sort by: </label>
          <select 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
          className='drop-down'
          >
            <option value="idAsc">ID (Oldest First)</option>
            <option value="idDesc">ID (Newest First)</option>
            <option value="firstName">First Name (A-Z)</option>
            <option value="lastName">Last Name (A-Z)</option>
            <option value="email">Email (A-Z)</option>
          </select>
      </div>








      <div className='card-containter'>
        {[...contacts]
        .sort(sortFunctions[sortOption])
        .map(c => (
          <div className='contact-card' key={c.id}>
            <h3>{c.firstName} {c.lastName}</h3>
            <p><strong>Email:</strong> {c.email}</p>
            <p><strong>Card ID:</strong> {c.id}</p>
            <span onClick={() => handleDelete(c.id)} className='delete-icon'>Delete</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
