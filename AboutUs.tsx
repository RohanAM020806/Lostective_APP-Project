import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container section-container">
      <h1 className="section-title">Our Mission</h1>
      <p className="section-subtitle">
        We believe that a lost item is more than just an object—it's a memory, a tool, or a piece of your daily life. Our mission is to leverage technology and community spirit to reunite people with their cherished belongings, turning moments of panic into stories of relief and connection.
      </p>

      <div className="mission-points">
        <div className="mission-point">
          <h3>🚀 Innovate</h3>
          <p>We build smart, intuitive technology that makes the search and recovery process faster and more efficient for everyone.</p>
        </div>
        <div className="mission-point">
          <h3>🤝 Connect</h3>
          <p>We foster a secure and helpful community where users can connect with confidence and kindness.</p>
        </div>
        <div className="mission-point">
          <h3>💖 Inspire</h3>
          <p>We aim to inspire acts of honesty and create positive outcomes, one reunited item at a time.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;