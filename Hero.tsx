import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of Link
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function

  // The full text we want to type out
  const fullText = "Never Lose Anything Again";
  // The text that is currently displayed on screen
  const [typedText, setTypedText] = useState('');

  // This index marks where the non-highlighted text ends
  const splitIndex = "Never Lose Anything ".length;

  useEffect(() => {
    // If the typed text isn't the full text yet, keep typing
    if (typedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        // Add the next character from fullText to typedText
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 100); // Adjust typing speed here (in milliseconds)

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [typedText, fullText]); // Re-run the effect when typedText changes

  // Function to handle button click
  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>
          {/* Display the part of the text before "Again" */}
          {typedText.substring(0, splitIndex)}
          {/* As the effect types "Again", it will appear here inside the highlight span */}
          <span className="highlight">
            {typedText.substring(splitIndex)}
          </span>
          {/* Add a blinking cursor for realism */}
          <span className="cursor">|</span>
        </h1>
        <p>
          Join the smartest community-powered platform where lost items find their way home. Report, match, and reunite in minutes.
        </p>
        <div className="hero-buttons">
          {/* --- UPDATED CODE --- */}
          {/* Use a button with an onClick handler for navigation */}
          <button onClick={handleGetStarted} className="report-btn">
            Get Started
          </button>
        </div>
      </div>

      <div className="hero-graphic">
        <div className="main-card">
          <div className="item-icon backpack">🎒</div>
          <div className="item-details">
            <h4>Found: Blue Backpack</h4>
            <p>Found at LH613, TP2 ,SRM University</p>
          </div>
        </div>
        <div className="floating-icon key">🔑</div>
        <div className="floating-icon phone">📱</div>
      </div>
    </main>
  );
};

export default Hero;

