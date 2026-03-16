import React from 'react';
import '../styles/News.css';

interface NewsProps {
  language: 'en' | 'hi';
}

interface NewsItem {
  id: number;
  iconType: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
}

const News: React.FC<NewsProps> = ({ language }) => {
  const content = {
    en: {
      mainTitle: 'NEWS',
      subtitle: 'LATEST UPDATES & NOTICES',
    },
    hi: {
      mainTitle: 'समाचार',
      subtitle: 'नवीनतम अपडेट और नोटिस',
    }
  };

  const newsItems: NewsItem[] = [
    {
      id: 1,
      iconType: 'bell',
      titleEn: 'Examination Form 2025',
      titleHi: 'परीक्षा फॉर्म 2025',
      descriptionEn: 'The examination forms for UG/PG courses are now available online.',
      descriptionHi: 'यूजी/पीजी पाठ्यक्रमों के लिए परीक्षा फॉर्म अब ऑनलाइन उपलब्ध हैं।'
    },
    {
      id: 2,
      iconType: 'calendar',
      titleEn: 'Holiday Notice',
      titleHi: 'छुट्टी की घोषणा',
      descriptionEn: 'The university will remain closed on 26 January for Republic Day.',
      descriptionHi: 'विश्वविद्यालय गणतंत्र दिवस पर 26 जनवरी को बंद रहेगा।'
    },
    {
      id: 3,
      iconType: 'graduation',
      titleEn: 'Admissions 2025',
      titleHi: 'प्रवेश 2025',
      descriptionEn: 'Admissions for new academic session will begin from March 2025.',
      descriptionHi: 'नए शैक्षणिक सत्र के लिए प्रवेश मार्च 2025 से शुरू होगा।'
    }
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'bell':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        );
      case 'calendar':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        );
      case 'graduation':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6m0 0l-8.97 4.486a2 2 0 0 1-1.79.263m10.76-4.75l-9.968-4.982a2 2 0 0 0-1.79-.263m10.76 4.75L2.03 10.487m10.97.487l8.97 4.486m-10.97-.487L2.03 5.513"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  const currentContent = content[language];

  return (
    <section className="news-section">
      <div className="news-container">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-main-title">{currentContent.mainTitle}</h2>
          <p className="section-subtitle">{currentContent.subtitle}</p>
        </div>

        {/* News Cards Grid */}
        <div className="news-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              {/* Card Icon */}
              <div className="news-icon">
                {renderIcon(item.iconType)}
              </div>

              {/* Card Content */}
              <div className="news-content">
                <h3 className="news-title">
                  {language === 'en' ? item.titleEn : item.titleHi}
                </h3>
                <p className="news-description">
                  {language === 'en' ? item.descriptionEn : item.descriptionHi}
                </p>
              </div>

              {/* Read More Link */}
              <a href="#" className="read-more-link">
                {language === 'en' ? 'Read More' : 'और पढ़ें'} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
