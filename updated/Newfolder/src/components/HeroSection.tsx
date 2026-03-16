import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';

interface HeroSectionProps {
  language: 'en' | 'hi';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images for the slider
  const sliderImages = [
    '/img/H2.jpg',
    '/img/H3.jpg',
    '/img/H4.jpg',
    '/img/HERO1.jpg'
  ];

  // Auto-advance the slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const content = {
    en: {
      mainTitle: 'Learning Today, Leading Tomorrow',
      subtitle: 'A place where ideas become achievements',
      buttonText: 'Admission 2026-2027'
    },
    hi: {
      mainTitle: 'आज सीखना, कल नेतृत्व करना',
      subtitle: 'एक ऐसी जगह जहां विचार उपलब्धियां बन जाती हैं',
      buttonText: 'प्रवेश 2026-2027'
    }
  };

  const data = content[language];

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  return (
    <section className="hero-section">
      {/* Blurred background layer */}
      <div 
        className="hero-blur-background" 
        style={{ backgroundImage: `url(${sliderImages[currentImageIndex]})` }}
      ></div>
      
      {/* Main image */}
      <div className="hero-image-container">
        <img 
          src={sliderImages[currentImageIndex]} 
          alt="Hero" 
          className="hero-main-image"
        />
      </div>
      
      <div className="hero-overlay"></div>
      <button className="hero-slider-arrow prev" onClick={handlePrevImage}>‹</button>
      <button className="hero-slider-arrow next" onClick={handleNextImage}>›</button>
      
      <div className="hero-content">
        <h2 className="hero-title">{data.mainTitle}</h2>
        <p className="hero-subtitle">{data.subtitle}</p>
        <button className="hero-button">{data.buttonText}</button>
      </div>

      <div className="hero-slider-dots">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
