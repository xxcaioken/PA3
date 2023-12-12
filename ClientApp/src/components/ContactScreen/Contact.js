/* eslint-disable no-undef */
import './Contact.css'; 
import React from 'react';


const Contact = (() => {

  const handleSubmit = (e) => {
    e.preventDefault();
    Alert('Form submitted');
    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

export default Contact;
