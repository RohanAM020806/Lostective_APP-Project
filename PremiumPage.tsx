import React from 'react';
import './PremiumPage.css';
import { FaCrown, FaCheckCircle } from 'react-icons/fa';

const PremiumPage: React.FC = () => {
  return (
    <div className="premium-container">
      <header className="premium-header">
        <FaCrown className="premium-icon" />
        <h1>Upgrade to Lostective Premium</h1>
        <p>Unlock powerful tools and faster recovery with our premium features.</p>
      </header>

      <div className="premium-cards">
        {/* Free Plan */}
        <div className="plan-card basic">
          <h2>Basic</h2>
          <p className="price">Free</p>
          <ul>
            <li><FaCheckCircle /> Post lost or found items</li>
            <li><FaCheckCircle /> Browse and claim</li>
            <li><FaCheckCircle /> Receive email updates</li>
          </ul>
          <button className="btn-disabled">Current Plan</button>
        </div>

        {/* Premium Plan */}
        <div className="plan-card premium">
          <h2><FaCrown /> Premium</h2>
          <p className="price">Rs 450 /Yearly</p>
          <ul>
            <li><FaCheckCircle /> Priority claim verification with CALLS & SMS</li>
            <li><FaCheckCircle /> AI-powered match recommendations</li>
            <li><FaCheckCircle /> Early access to new features</li>
            <li><FaCheckCircle /> Instant support from our team</li>
            <li><FaCheckCircle /> Verified user badge</li>
          </ul>
          <button className="btn-upgrade">Go Premium</button>
        </div>
      </div>

      <footer className="premium-footer">
        <p>Built with ❤️ by Rohan A M · <a href="https://www.linkedin.com/in/rohan-a-m-0382a2324/" target="_blank">Connect on LinkedIn</a></p>
      </footer>
    </div>
  );
};

export default PremiumPage;
