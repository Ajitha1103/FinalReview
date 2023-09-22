import React from 'react';
import './Contact.css';

function ContactUsPage() {
  return (
    <div className="contact-page">
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-info">
        <p>You can reach us at:</p>
        <ul>
          <li>Email: bankapp@gmail.com</li>
          <li>Phone: +1 (123) 456-7890</li>
        </ul>
      </div>
      <div className="contact-form">
        <form action="#" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ContactUsPage;
