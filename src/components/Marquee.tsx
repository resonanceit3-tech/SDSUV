import React from 'react';
import '../styles/Marquee.css';

interface MarqueeProps {
  language: 'en' | 'hi';
}

const Marquee: React.FC<MarqueeProps> = ({ language }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span className="marquee-text">
          💬 Welcome to Sri Dev Suman Uttarakhand University
        </span>
        <span className="marquee-text">
          🎓 Admissions 2026-2027 Now Open
        </span>
        <span className="marquee-text">
          ➡️ Apply Now
        </span>
        <span className="marquee-text">
          ⭐ Excellence in Education
        </span>
      </div>
    </div>
  );
};

export default Marquee;
