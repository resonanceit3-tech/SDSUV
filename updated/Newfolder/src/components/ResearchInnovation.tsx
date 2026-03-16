import React, { useState } from 'react';
import '../styles/ResearchInnovation.css';

interface ResearchInnovationProps {
  language: 'en' | 'hi';
}

interface MenuItem {
  id: string;
  labelEn: string;
  labelHi: string;
}

interface Stat {
  id: number;
  numberEn: string;
  numberHi: string;
  labelEn: string;
  labelHi: string;
}

const ResearchInnovation: React.FC<ResearchInnovationProps> = ({ language }) => {
  const [activeItem, setActiveItem] = useState<string>('overview');

  const menuItems: MenuItem[] = [
    {
      id: 'overview',
      labelEn: 'Overview',
      labelHi: 'अवलोकन'
    },
    {
      id: 'rd-cell',
      labelEn: 'Research & Development Cell',
      labelHi: 'अनुसंधान और विकास सेल'
    },
    {
      id: 'iprc',
      labelEn: 'Intellectual Property Rights Cell',
      labelHi: 'बौद्धिक संपत्ति अधिकार सेल'
    },
    {
      id: 'coe',
      labelEn: 'Centre of Excellence',
      labelHi: 'उत्कृष्टता केंद्र'
    },
    {
      id: 'src',
      labelEn: 'Student Research Cell',
      labelHi: 'छात्र अनुसंधान सेल'
    },
    {
      id: 'seic',
      labelEn: 'Startups, Entrepreneurship, and Innovation Cell',
      labelHi: 'स्टार्टअप, उद्यमिता और नवाचार सेल'
    }
  ];

  const statistics: Stat[] = [
    {
      id: 1,
      numberEn: '6000+',
      numberHi: '6000+',
      labelEn: 'Paper Publications',
      labelHi: 'पेपर प्रकाशन'
    },
    {
      id: 2,
      numberEn: '1400+',
      numberHi: '1400+',
      labelEn: 'Paper Publications with International Collaboration',
      labelHi: 'अंतर्राष्ट्रीय सहयोग के साथ पेपर प्रकाशन'
    },
    {
      id: 3,
      numberEn: '75+',
      numberHi: '75+',
      labelEn: 'Countries Collaboration',
      labelHi: 'देशों का सहयोग'
    }
  ];

  return (
    <div className="research-innovation">
      <div className="research-innovation-container">
        <div className="research-left">
          <h2 className="research-title">
            {language === 'en' ? 'Research & Innovation' : 'अनुसंधान और नवाचार'}
          </h2>
          <div className="research-menu">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`research-menu-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.id);
                }}
              >
                <span className="menu-arrow">→</span>
                <span className="menu-label">
                  {language === 'en' ? item.labelEn : item.labelHi}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="research-right">
          <div className="research-stats-box">
            {statistics.map((stat) => (
              <div key={stat.id} className="research-stat-item">
                <div className="stat-number">
                  {language === 'en' ? stat.numberEn : stat.numberHi}
                </div>
                <div className="stat-label">
                  {language === 'en' ? stat.labelEn : stat.labelHi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchInnovation;
