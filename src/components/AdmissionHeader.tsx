import React from 'react';
import '../styles/AdmissionHeader.css';

interface AdmissionHeaderProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const AdmissionHeader: React.FC<AdmissionHeaderProps> = ({ language, onBack }) => {
  const content = {
    en: {
      home: 'Home',
      admission: 'Admission Portal'
    },
    hi: {
      home: 'होम',
      admission: 'प्रवेश पोर्टल'
    }
  };

  const data = content[language];

  return (
    <header className="admission-header">
      <div className="admission-header-content">
        <div className="admission-header-left">
          <button className="back-btn" onClick={onBack} title="Go Back">
            <span className="back-arrow">←</span>
            {data.home}
          </button>
        </div>
        <div className="admission-header-title">
          {data.admission}
        </div>
        <div className="admission-header-right"></div>
      </div>
    </header>
  );
};

export default AdmissionHeader;
