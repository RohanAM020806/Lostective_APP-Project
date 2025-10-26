import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

// ... (StatItem component code is the same as before)
interface StatItemProps { value: number; label: string; suffix?: string; }
const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = '' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div className="stat-card" ref={ref}>
      <h3 className="stat-value">
        {inView ? <CountUp start={0} end={value} duration={2.5} separator="," /> : '0'}
        {suffix}
      </h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};


const Stats: React.FC = () => {
  return (
    <section id="stats" className="stats-container"> {/* Added id="stats" here */}
      <div className="stats-grid">
        <StatItem value={5.2} suffix="K" label="Items Reunited" />
        <StatItem value={12} suffix="K+" label="Happy Users" />
        <StatItem value={94} suffix="%" label="Success Rate" />
        <StatItem value={24} suffix="/7" label="Support" />
      </div>
    </section>
  );
};

export default Stats;