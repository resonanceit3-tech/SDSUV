import React from 'react';
import '../styles/WhyChooseUs.css';

interface WhyChooseUsProps {
  language: 'en' | 'hi';
}

interface Statistic {
  numberEn: string;
  numberHi: string;
  labelEn: string;
  labelHi: string;
}

interface Feature {
  id: number;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  icon: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const statistics: Statistic[] = [
    {
      numberEn: '80000+',
      numberHi: '80000+',
      labelEn: 'Students',
      labelHi: 'छात्र'
    },
    {
      numberEn: '238',
      numberHi: '238',
      labelEn: 'affiliated colleges',
      labelHi: 'संबद्ध कॉलेज'
    },
    {
      numberEn: '64',
      numberHi: '64',
      labelEn: 'Govt colleges',
      labelHi: 'सरकारी कॉलेज'
    },
    {
      numberEn: '174',
      numberHi: '174',
      labelEn: 'private colleges',
      labelHi: 'निजी कॉलेज'
    }
   
  ];

  const features: Feature[] = [
    {
      id: 1,
      titleEn: 'Government recognized state university',
      titleHi: 'सरकार द्वारा मान्यता प्राप्त राज्य विश्वविद्यालय',
      descriptionEn: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisl ut aliquip',
      descriptionHi: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisl ut aliquip',
      icon: 'chart'
    },
    {
      id: 2,
      titleEn: 'Modern NEP-based academic structure',
      titleHi: 'आधुनिक NEP-आधारित शैक्षणिक संरचना',
      descriptionEn: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
      descriptionHi: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
      icon: 'diamond'
    },
    {
      id: 3,
      titleEn: 'Highly qualified faculty',
      titleHi: 'अत्यधिक योग्य संकाय',
      descriptionEn: 'Aut suscipit aut cum memo deleníti aut omnis. Doloribus ut maiores omnis facere',
      descriptionHi: 'Aut suscipit aut cum memo deleníti aut omnis. Doloribus ut maiores omnis facere',
      icon: 'briefcase'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'chart':
        return (
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        );
      case 'diamond':
        return (
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L22 8V16L12 22L2 16V8L12 2Z" />
            <path d="M12 2L12 22" />
            <path d="M2 8L22 16" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="why-choose-us">
      <div className="why-choose-container">
        {/* Statistics Section */}
        <div className="statistics-section">
          {statistics.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">
                {language === 'en' ? stat.numberEn : stat.numberHi}
              </div>
              <div className="stat-label">
                {language === 'en' ? stat.labelEn : stat.labelHi}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="choose-content">
          <div className="choose-left">
            <div className="choose-box">
              <h2>{language === 'en' ? 'Why Choose sri dev suman uttarakhand university ?' : 'श्री देव सुमन उत्तरांचल विश्वविद्यालय को क्यों चुनें ?'}</h2>
              <p className="choose-subtitle">{language === 'en' ? 'Why Choose SDSUV?' : 'SDSUV को क्यों चुनें?'}</p>
              <a href="#" className="learn-more-btn">
                {language === 'en' ? 'Learn More' : 'और अधिक जानें'} <span>›</span>
              </a>
            </div>
          </div>

          <div className="choose-right">
            <div className="features-grid">
              {features.map((feature) => (
                <div key={feature.id} className="feature-card">
                  <div className="feature-icon-circle">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="feature-title">
                    {language === 'en' ? feature.titleEn : feature.titleHi}
                  </h3>
                  <p className="feature-description">
                    {language === 'en' ? feature.descriptionEn : feature.descriptionHi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
