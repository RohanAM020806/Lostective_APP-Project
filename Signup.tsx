import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css'; 

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Creating account...');

    try {
      
      const res = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }), 
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Backend response:', data);
        setStatus('✅ Account created successfully! Redirecting...');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setStatus('❌ ' + (data.detail || 'Signup failed.'));
      }
    } catch (err) {
      console.error('Signup error:', err);
      setStatus('❌ Unable to connect to backend.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h1>Create an Account</h1>
        <p>Join our community to find and report items.</p>

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        {status && <p>{status}</p>}

        <p className="form-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

