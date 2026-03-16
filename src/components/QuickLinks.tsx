import React from 'react';
import '../styles/QuickLinks.css';

interface QuickLinksProps {
  language: 'en' | 'hi';
}

interface QuickLink {
  id: number;
  titleEn: string;
  titleHi: string;
  icon: string;
  color: string;
  hasBorder?: boolean;
  url: string;
}

const QuickLinks: React.FC<QuickLinksProps> = ({ language }) => {
  const quickLinks: QuickLink[] = [
    {
      id: 1,
      titleEn: 'online examination application form',
      titleHi: 'ऑनलाइन परीक्षा आवेदन फॉर्म',
      icon: 'eye',
      color: '#f5a623',
      url: '#'
    },
    {
      id: 2,
      titleEn: 'online old results',
      titleHi: 'ऑनलाइन पुराने परिणाम',
      icon: 'infinity',
      color: '#2ecc71',
      url: '#'
    },
    {
      id: 3,
      titleEn: 'online results 2023-2024',
      titleHi: 'ऑनलाइन परिणाम 2023-2024',
      icon: 'graduation',
      color: '#e74c3c',
      url: '#'
    },
    {
      id: 4,
      titleEn: 'colleague affiliation portal',
      titleHi: 'सहयोगी संबद्धता पोर्टल',
      icon: 'circle',
      color: '#9b59b6',
      url: '#'
    },
    {
      id: 5,
      titleEn: 'apply online for migration certificate',
      titleHi: 'प्रवासन प्रमाणपत्र के लिए ऑनलाइन आवेदन करें',
      icon: 'migration',
      color: '#3498db',
      url: '#'
    },
    {
      id: 6,
      titleEn: 'apply online',
      titleHi: 'ऑनलाइन आवेदन करें',
      icon: 'star',
      color: '#f39c12',
      url: '#'
    },
    {
      id: 7,
      titleEn: 'student grievance form',
      titleHi: 'छात्र शिकायत फॉर्म',
      icon: 'diamond',
      color: '#1abc9c',
      url: '#'
    },
    {
      id: 8,
      titleEn: 'post graduation syllabus',
      titleHi: 'स्नातकोत्तर पाठ्यक्रम',
      icon: 'video',
      color: '#8e44ad',
      url: '#'
    },
    {
      id: 9,
      titleEn: 'profession syllabus',
      titleHi: 'व्यावसायिक पाठ्यक्रम',
      icon: 'settings',
      color: '#d4a574',
      url: '#'
    },
    {
      id: 10,
      titleEn: 'nep ug syllabus',
      titleHi: 'NEP UG पाठ्यक्रम',
      icon: 'circle-fill',
      color: '#c0392b',
      url: '#'
    },
    {
      id: 11,
      titleEn: 'online rti',
      titleHi: 'ऑनलाइन RTI',
      icon: 'zigzag',
      color: '#e67e22',
      url: '#'
    },
    {
      id: 12,
      titleEn: 'aapplication form for revaluation of answer sheets',
      titleHi: 'उत्तर पत्रों के पुनर्मूल्यांकन के लिए आवेदन पत्र',
      icon: 'sun',
      color: '#27ae60',
      url: '#'
    }
  ];

  const getIcon = (iconName: string, color: string) => {
    const iconProps = { className: 'quick-link-icon', fill: color };
    
    switch (iconName) {
      case 'eye':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
        );
      case 'infinity':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M8 5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-8 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
          </svg>
        );
      case 'graduation':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          </svg>
        );
      case 'circle':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2" />
          </svg>
        );
      case 'migration':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z" />
            <path d="M12 19l-2-2m2 2l2-2m-2 2v-5" stroke={color} fill="none" strokeWidth="2" />
          </svg>
        );
      case 'star':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      case 'diamond':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M12 2L2 8v8l10 6 10-6V8l-10-6z" />
            <line x1="2" y1="8" x2="12" y2="14" stroke={color} fill="none" strokeWidth="2" />
            <line x1="22" y1="8" x2="12" y2="14" stroke={color} fill="none" strokeWidth="2" />
            <line x1="12" y1="14" x2="12" y2="20" stroke={color} fill="none" strokeWidth="2" />
          </svg>
        );
      case 'video':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M8 5v14l11-7z" />
          </svg>
        );
      case 'settings':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6m-15.78 7.78l4.24-4.24m5.08-5.08l4.24-4.24" stroke={color} fill="none" strokeWidth="2" />
          </svg>
        );
      case 'circle-fill':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      case 'zigzag':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <polyline points="2 6 8 12 2 18 8 24" fill="none" stroke={color} strokeWidth="2" />
            <polyline points="14 6 20 12 14 18 20 24" fill="none" stroke={color} strokeWidth="2" />
          </svg>
        );
      case 'sun':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" stroke={color} strokeWidth="2" />
            <line x1="12" y1="21" x2="12" y2="23" stroke={color} strokeWidth="2" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke={color} strokeWidth="2" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke={color} strokeWidth="2" />
            <line x1="1" y1="12" x2="3" y2="12" stroke={color} strokeWidth="2" />
            <line x1="21" y1="12" x2="23" y2="12" stroke={color} strokeWidth="2" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke={color} strokeWidth="2" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke={color} strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="quick-links">
      <div className="quick-links-container">
        <div className="quick-links-title">
          <h2>{language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}</h2>
          <p>{language === 'en' ? 'Access important resources and information quickly' : 'महत्वपूर्ण संसाधनों और जानकारी तक शीघ्रता से पहुंचें'}</p>
        </div>
        <div className="quick-links-grid">
          {quickLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className={`quick-link-card ${link.hasBorder ? 'with-border' : ''}`}
              style={{
                '--card-color': link.color,
                '--card-color-light': link.color + '33'
              } as React.CSSProperties}
            >
              <div className="quick-link-icon-wrapper">
                {getIcon(link.icon, 'white')}
              </div>
              <span className="quick-link-text">
                {language === 'en' ? link.titleEn : link.titleHi}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
