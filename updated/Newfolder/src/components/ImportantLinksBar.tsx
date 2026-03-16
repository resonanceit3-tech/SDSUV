import React from 'react';
import '../styles/ImportantLinksBar.css';

interface ImportantLinksBarProps {
  language: 'en' | 'hi';
  onLinkClick?: (linkId: string) => void;
}

const ImportantLinksBar: React.FC<ImportantLinksBarProps> = ({ language, onLinkClick }) => {
  const links = [
    {
      id: 'college-affiliation',
      textEn: 'College Affiliation Portal',
      textHi: 'कॉलेज संबद्धता पोर्टल',
      url: '#'
    },
    {
      id: 'ordinance-curriculum',
      textEn: 'Ordinance & Curriculum Framework - 2025',
      textHi: 'अध्यादेश और पाठ्यक्रम रूपरेखा - 2025',
      url: '#'
    },
    {
      id: 'scholarship',
      textEn: 'छात्रवृत्ति',
      textHi: 'छात्रवृत्ति',
      url: '#'
    },
    {
      id: 'convocation-medal',
      textEn: '6th Convocation Gold Medal List',
      textHi: '6वें दीक्षांत समारोह स्वर्ण पदक सूची',
      url: '#'
    },
    {
      id: 'phd-merit-list',
      textEn: 'Ph.D. Entrance Exam Second Counselling Merit List',
      textHi: 'Ph.D. प्रवेश परीक्षा दूसरी परामर्श योग्यता सूची',
      url: '#'
    },
    {
      id: 'nirf',
      textEn: 'NIRF',
      textHi: 'NIRF',
      url: '#'
    },
    {
      id: 'academic-calendar',
      textEn: 'Academic Calendar for Session 2025-2026',
      textHi: 'सत्र 2025-2026 के लिए शैक्षणिक कैलेंडर',
      url: '#'
    },
    {
      id: 'helpline',
      textEn: 'Helpline No +91 1376 297 702',
      textHi: 'हेल्पलाइन No +91 1376 297 702',
      url: '#'
    },
    {
      id: 'phd-notification',
      textEn: 'Ph.D. Notification and List - 2025',
      textHi: 'Ph.D. सूचना और सूची - 2025',
      url: '#'
    },
    {
      id: 'exam-date-sheet',
      textEn: 'Exam Date Sheet 2025-2026',
      textHi: 'परीक्षा तारीख पत्र 2025-2026',
      url: '#'
    },
    {
      id: 'convocation-quotation',
      textEn: 'Quotation for Convocation',
      textHi: 'दीक्षांत समारोह के लिए उद्धरण',
      url: '#'
    },
    {
      id: 'university-film',
      textEn: 'University Short Film',
      textHi: 'विश्वविद्यालय लघु फिल्म',
      url: '#'
    }
  ];

  const handleClick = (e: React.MouseEvent, linkId: string) => {
    e.preventDefault();
    if (onLinkClick) {
      onLinkClick(linkId);
    }
  };

  return (
    <div className="important-links-bar">
      <div className="important-links-container">
        {links.map((link) => (
          <a 
            key={link.id} 
            href={link.url} 
            className="important-link-btn"
            title={language === 'en' ? link.textEn : link.textHi}
            onClick={(e) => handleClick(e, link.id)}
          >
            {language === 'en' ? link.textEn : link.textHi}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImportantLinksBar;
