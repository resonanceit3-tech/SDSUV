import React from 'react';
import '../styles/CampusLife.css';

interface CampusLifeProps {
  language: 'en' | 'hi';
  setCurrentPage: (page: any) => void;
}

interface CampusCard {
  id: number;
  titleEn: string;
  titleHi: string;
  image: string;
  page?: 'sports' | 'cultural' | 'academics';
}

interface ImportantLink {
  id: number;
  textEn: string;
  textHi: string;
  url: string;
  page?: string;
}

const CampusLife: React.FC<CampusLifeProps> = ({ language, setCurrentPage }) => {
  const cards: CampusCard[] = [
    {
      id: 1,
      titleEn: 'Sports',
      titleHi: 'खेल',
      image: '/img/campus-life/sports.jpg.png',
      page: 'sports'
    },
    {
      id: 2,
      titleEn: 'Cultural',
      titleHi: 'सांस्कृतिक',
      image: '/img/campus-life/cultural.jpg.jpg',
      page: 'cultural'
    },
    {
      id: 3,
      titleEn: 'Academics',
      titleHi: 'शिक्षा',
      image: '/img/campus-life/academics.jpg.jpg',
      page: 'academics'
    }
  ];

  const importantLinks: ImportantLink[] = [
    {
      id: 1,
      textEn: 'UP State Universities Act',
      textHi: 'यूपी राज्य विश्वविद्यालय अधिनियम',
      url: '#',
      page: 'up-state-universities-act'
    },
    {
      id: 2,
      textEn: 'Information Regarding RTI Act',
      textHi: 'RTI अधिनियम के संबंध में जानकारी',
      url: '#',
      page: 'rti-act'
    },
    {
      id: 3,
      textEn: 'Internal Quality Assurance Cell',
      textHi: 'आंतरिक गुणवत्ता आश्वासन सेल',
      url: '#',
      page: 'iqac'
    },
    {
      id: 4,
      textEn: 'Startup Cell & Incubation Center',
      textHi: 'स्टार्टअप सेल और इनक्यूबेशन सेंटर',
      url: '#',
      page: 'startup-cell'
    },
    {
      id: 5,
      textEn: 'IT Policy 2022',
      textHi: 'IT नीति 2022',
      url: '#',
      page: 'it-policy'
    },
    {
      id: 6,
      textEn: 'IPR Policy 2022',
      textHi: 'IPR नीति 2022',
      url: '#',
      page: 'ipr-policy'
    },
    {
      id: 7,
      textEn: 'Ph.D. / D.Litt.',
      textHi: 'पीएच.डी. / डी.लिट्.',
      url: '#',
      page: 'phd-dlitt'
    }
  ];

  const handleCardClick = (page?: 'sports' | 'cultural' | 'academics') => {
    if (page && setCurrentPage) {
      setCurrentPage(page as any);
    }
  };

  return (
    <div className="campus-life">
      <div className="campus-container">
        <div className="campus-header">
          <h2>{language === 'en' ? 'CAMPUS LIFE' : 'कैम्पस जीवन'}</h2>
          <p>{language === 'en' ? 'A vibrant hub for innovation & creativity' : 'नवाचार और रचनात्मकता के लिए एक जीवंत केंद्र'}</p>
        </div>

        <div className="campus-grid">
          {cards.map((card) => (
            <div key={card.id} className="campus-card" onClick={() => handleCardClick(card.page)}>
              <div className="card-header">{language === 'en' ? card.titleEn : card.titleHi}</div>
              <div className="card-image">
                <img src={card.image} alt={language === 'en' ? card.titleEn : card.titleHi} />
              </div>
              <div className="card-footer">
                <span className="view-more">{language === 'en' ? 'VIEW MORE' : 'और अधिक देखें'}</span>
              </div>
            </div>
          ))}

          <div className="campus-card links-card">
            <div className="card-header">{language === 'en' ? 'Important Links' : 'महत्वपूर्ण लिंक'}</div>
            <div className="links-content">
              {importantLinks.map((link) => (
                <button 
                  key={link.id} 
                  className="important-link"
                  onClick={() => link.page && setCurrentPage(link.page as any)}
                >
                  {language === 'en' ? link.textEn : link.textHi}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
