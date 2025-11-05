import React from 'react';
import './TimelinePage.css';


interface RoadmapEvent {
  version: string;
  title: string;
  features: string[];
}

const roadmapData: RoadmapEvent[] = [
  {
    version: '1.0',
    title: 'Initial release with core functionality',
    features: [
      'Lost & Found item reporting',
      'Browse and claim flow',
      'Cloud Backend integration',
      'User login & signup',
      'Email notification for claims',
      'Admin dashboard',
      'Call supports',
      'Semantic Search',
      'Feedback system',
    ],
  },
  {
    version: '1.4(Beta Testing)',
    title: 'Focused on community and core refinement',
    features: [
      'Enhanced form validation',
      'Claim verification logic improved',
      'Early-stage feedback form integrated',
      'New card UI for items',
      'Navigation links improved',
      'Response UI improved',
    ],
  },
];

const TimelinePage: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1>Whats New</h1>
        <p>Follow our journey and see how Lostective has evolved over time.</p>
      </div>
      <div className="timeline">
        {roadmapData.map((event, index) => (
          <div key={index} className="timeline-item">
            {/* The vertical line and dot */}
            <div className="timeline-dot-connector">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>

           
            <div className="timeline-content">
              <div className="timeline-card">
                <h2 className="card-version-title">
                  <span className="card-version-icon"></span>
                  Version {event.version}
                </h2>
                <p className="card-version-summary">{event.title}</p>
                <ul className="card-features-list">
                  {event.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TimelinePage;
