import React from 'react';
import '../styles/AboutUsHeader.css';

interface AboutUsHeaderProps {
  language: 'en' | 'hi';
}

const AboutUsHeader: React.FC<AboutUsHeaderProps> = ({ language }) => {
  const content = {
    en: {
      title: 'About Us',
      universityName: 'Sri Dev Suman Uttarakhand University'
    },
    hi: {
      title: 'हमारे बारे में',
      universityName: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय'
    }
  };

  const data = content[language];

  return (
    <div className="about-us-header">
      <div className="header-content">
        <h1 className="header-title">{data.title}</h1>
        <p className="header-subtitle">{data.universityName}</p>
      </div>
    </div>
  );
};

export default AboutUsHeader;
