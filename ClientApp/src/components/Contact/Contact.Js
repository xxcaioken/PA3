import React from 'react';
import './Contact.css'; 

const Contact = React.memo(() => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send email)
    console.log('Form submitted');
    // Optionally, you can clear the form fields after submission
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
