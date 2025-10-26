// WhyChooseUs.tsx
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs: React.FC = () => (
  <section className="section-container">
    <h2 className="section-title">Why Choose FindBack?</h2>
    <p className="section-subtitle">
      We combine technology and community to create the most effective platform for finding what you've lost.
    </p>
    <div className="features-grid">
      <div className="feature-card">
        <h3>⚡️ Fast & Efficient</h3>
        <p>Our smart matching algorithm connects lost and found reports in real-time.</p>
      </div>
      <div className="feature-card">
        <h3>🛡️ Safe & Secure</h3>
        <p>Your privacy is our priority. Communicate safely through our anonymous messaging system.</p>
      </div>
      <div className="feature-card">
        <h3>🌍 Community Powered</h3>
        <p>A network of thousands of helpful users increases the chances of a happy reunion.</p>
      </div>
    </div>
  </section>
);
export default WhyChooseUs;