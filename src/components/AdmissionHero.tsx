import React from 'react';
import '../styles/AdmissionHero.css';

interface AdmissionHeroProps {
  language: 'en' | 'hi';
}

const AdmissionHero: React.FC<AdmissionHeroProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Learning Today, Leading Tomorrow',
      subtitle: 'A place where ideas become achievements',
      buttonText: 'Admission 2026-2027'
    },
    hi: {
      title: 'आज सीखें, कल नेतृत्व करें',
      subtitle: 'एक जगह जहाँ विचार उपलब्धियों में बदलते हैं',
      buttonText: 'प्रवेश 2026-2027'
    }
  };

  const data = content[language];

  return (
    <section className="admission-hero">
      <div className="hero-content">
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <button className="hero-btn">{data.buttonText}</button>
      </div>
      <div className="hero-decorative"></div>
    </section>
  );
};

export default AdmissionHero;
