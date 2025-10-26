import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Dashboard.css';

// Mock data for the activity list
const recentActivity = [
  { id: 1, icon: '💻', name: 'Silver Laptop', location: 'Engineering Building, Study Room 3B', date: 'Oct 11', category: 'electronics' },
  { id: 2, icon: '🔑', name: 'House Keys', location: 'Campus Recreation Center, Locker Room', date: 'Oct 11', category: 'keys' },
  { id: 3, icon: '📚', name: 'Calculus Textbook', location: 'Mathematics Building, Lecture Hall A', date: 'Oct 11', category: 'books' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-layout">
      {/* ------------------ Sidebar Navigation ------------------ */}
      <aside className="sidebar">
        <div className="sidebar-header">
  
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className="nav-link" end>
            <span role="img" aria-label="dashboard icon">🏠</span> Dashboard
          </NavLink>
          <NavLink to="/browse" className="nav-link"> {/* ✅ Fixed /Browse → /browse */}
            <span role="img" aria-label="browse icon">📖</span> Browse Items
          </NavLink>
          <NavLink to="/report-lost" className="nav-link">
            <span role="img" aria-label="report lost icon"></span> Report Lost
          </NavLink>
          <NavLink to="/report-found" className="nav-link">
            <span role="img" aria-label="report found icon"></span> Report Found
          </NavLink>
          <NavLink to="/premium" className="nav-link">
            <span role="img" aria-label="premium">💎</span> Premium
           </NavLink>

          <NavLink to="/about-me" className="nav-link">
          <span role="img" aria-label="about me icon">💡</span> About Me
           </NavLink>

        </nav>
        <div className="sidebar-footer">
          <h4>Need Help?</h4>
          <p>Contact campus security for assistance.</p>
        </div>
      </aside>

      {/* ------------------ Main Content Area ------------------ */}
      <main className="main-content">
        <header className="main-header">
          <h2>Welcome to Lostective</h2>
          <p>Your university's lost and found hub - helping students reunite with their belongings.</p>
        </header>

        {/* ------------------ Stats Cards Grid ------------------ */}
        <div className="stats-grid">
          <div className="stat-card lost">
            <div className="stat-icon-wrapper"><span role="img" aria-label="lost item icon">📦</span></div>
            <div className="stat-info">
              <p>Lost Items</p>
              <span>3</span>
            </div>
            <Link to="/my-reports">→ Active reports</Link> {/* ✅ Changed <a> to <Link> */}
          </div>

          <div className="stat-card found">
            <div className="stat-icon-wrapper"><span role="img" aria-label="found item icon">✅</span></div>
            <div className="stat-info">
              <p>Found Items</p>
              <span>4</span>
            </div>
            <Link to="/browse">→ Awaiting owners</Link> {/* ✅ Changed <a> to <Link> & fixed path */}
          </div>

          <div className="stat-card reunited">
            <div className="stat-icon-wrapper"><span role="img" aria-label="reunited icon">🤝</span></div>
            <div className="stat-info">
              <p>Reunited</p>
              <span>0</span>
            </div>
            <Link to="#">+12 this week</Link>
          </div>

          <div className="stat-card success">
            <div className="stat-icon-wrapper"><span role="img" aria-label="success rate icon">📈</span></div>
            <div className="stat-info">
              <p>Success Rate</p>
              <span>78%</span>
            </div>
            <Link to="#">All time</Link>
          </div>
        </div>

        {/* ------------------ Main Dashboard Columns ------------------ */}
        <div className="dashboard-columns">
          {/* Recent Activity List */}
          <div className="recent-activity-card">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              {recentActivity.map(item => (
                <div className="activity-item" key={item.id}>
                  <div className="activity-icon">{item.icon}</div>
                  <div className="activity-details">
                    <h4>{item.name}</h4>
                    <p>{item.location} • {item.date}</p>
                  </div>
                  <div className={`category-tag ${item.category}`}>{item.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Cards */}
          <div className="cta-cards-wrapper">
            <div className="cta-card cta-lost">
              <h4>Lost Something?</h4>
              <p>Report your lost item and we'll help you find it.</p>
              <ul>
                <li>✓ Describe your item</li>
                <li>✓ Add location details</li>
                <li>✓ Get matched with found items</li>
              </ul>
              <Link to="/report-lost" className="cta-button">Report Now</Link>
            </div>
            <div className="cta-card cta-found">
              <h4>Found Something?</h4>
              <p>Help a fellow student by reporting what you found.</p>
              <Link to="/report-found" className="cta-button">Report Now</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
