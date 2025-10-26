import React from 'react';
import './Features.css';

const Features: React.FC = () => (
  <section id="features" className="section-container">
    <h2 className="section-title">A Smarter, Faster Way to Find What's Lost</h2>
    <p className="section-subtitle">
      We combine user-friendly features with a powerful AI engine to maximize the chances of a successful reunion.
    </p>
    <div className="features-grid">
      {/* AI/ML Features */}
      <div className="feature-card">
        <div className="feature-icon">🧠</div>
        <h3>Intelligent Matching Engine</h3>
        <p>
          Our core AI uses NLP for text analysis and a CNN for image analysis, creating highly accurate matches that simple keyword searches would miss.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🔔</div>
        <h3>AI-Powered Notifications</h3>
        <p>
          Our system automatically scores potential matches. When a high-confidence match is found, you get an instant notification to review it.
        </p>
      </div>
       <div className="feature-card">
        <div className="feature-icon">📸</div>
        <h3>Image Recognition</h3>
        <p>
          When you upload a photo, our AI can automatically detect the item and suggest a category, making the reporting process faster and more accurate.
        </p>
      </div>
       <div className="feature-card">
        <div className="feature-icon">🤝</div>
        <h3>Secure Item Handover</h3>
        <p>
          We provide a secure process, like a one-time verification code, to ensure that the item is returned safely to its verified owner.
        </p>
      </div>

      {/* User-Facing Features */}
      <div className="feature-card">
        <div className="feature-icon">📍</div>
        <h3>Location-Based Matching</h3>
        <p>Our algorithm prioritizes matches based on the geographical area where an item was lost and found, narrowing down the search instantly.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">💬</div>
        <h3>Secure & Anonymous Chat</h3>
        <p>Connect with the finder or owner through our private messaging system without sharing personal contact information until you're ready.</p>
      </div>

      {/* Technical Architecture Features */}
      <div className="feature-card">
        <div className="feature-icon">🎨</div>
        <h3>Dynamic & Responsive UI</h3>
        <p>
          A seamless and intuitive user interface built with React, ensuring a great experience whether you're on a desktop or mobile device.
        </p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">⚙️</div>
        <h3>Scalable MERN Architecture</h3>
        <p>
          Built on a robust MERN stack (MongoDB, Express, React, Node.js) to efficiently handle user data and intensive machine learning tasks.
        </p>
      </div>
    </div>
  </section>
);

export default Features;