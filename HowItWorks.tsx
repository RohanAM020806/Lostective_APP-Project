import React from 'react';
import './HowItWorks.css';

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="section-container how-it-works-section">
    <h2 className="section-title">Reunite in 3 Easy Steps</h2>
    <p className="section-subtitle">
      Our streamlined process makes reporting and finding items effortless.
    </p>
    <div className="steps-container">
      <div className="step-card">
        <div className="step-number">1</div>
        <h3>Post a Report</h3>
        <p>Quickly create a detailed post about your lost or found item with photos and location.</p>
      </div>
      <div className="step-arrow">→</div>
      <div className="step-card">
        <div className="step-number">2</div>
        <h3>Get Matched</h3>
        <p>Our system instantly searches for potential matches and notifies both parties.</p>
      </div>
      <div className="step-arrow">→</div>
      <div className="step-card">
        <div className="step-number">3</div>
        <h3>Connect & Reunite</h3>
        <p>Use our secure chat to coordinate a safe and convenient return of the item.</p>
      </div>
    </div>
  </section>
);

export default HowItWorks;