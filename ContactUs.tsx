import React from 'react';
import '../Login/Login.css'; // Shared CSS works well here

const ContactUs: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h1>Contact Us</h1>
        <p>Have a question or feedback? Let us know!</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" required style={{ minHeight: '150px' }}></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;