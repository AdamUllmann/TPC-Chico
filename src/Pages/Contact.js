import React from 'react';
import contactData from '../DataFiles/ContactData';
import '../CSS/Contact.css'

function Contact() {
    return (
      <div className="contactBody">
        <div className="contactContainer">
          {contactData.map((contact, index) => (
            <div key={index} className="contactCard">
              <h2>{contact.role}</h2>
              <p>Name: {contact.name}</p>
              <p>Email: {contact.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Contact;
