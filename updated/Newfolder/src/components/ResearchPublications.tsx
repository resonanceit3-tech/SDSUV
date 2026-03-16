import React, { useState } from 'react';
import '../styles/ResearchPublications.css';

interface ResearchPublicationsProps {
  language: 'en' | 'hi';
  setCurrentPage?: (page: string) => void;
}

interface MenuItem {
  id: string;
  titleEn: string;
  titleHi: string;
  headerTitleEn?: string;
  headerTitleHi?: string;
  descriptionEn?: string;
  descriptionHi?: string;
}

interface PublicationCard {
  id: number;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  image: string;
  date: string;
}

const ResearchPublications: React.FC<ResearchPublicationsProps> = ({ language, setCurrentPage }) => {
  const [expandedMenu, setExpandedMenu] = useState<string>('internal-quality-assurance');

  const handlePublicationClick = (publicationId: number) => {
    if (publicationId === 1 && setCurrentPage) {
      setCurrentPage('campus-sports-gallery');
    }
  };

  const handleMenuItemClick = (itemId: string) => {
    if (itemId === 'mou' && setCurrentPage) {
      setCurrentPage('moues');
    } else if (itemId === 'center-excellence' && setCurrentPage) {
      setCurrentPage('centre-excellence-page');
    } else if (itemId === 'research-development' && setCurrentPage) {
      setCurrentPage('research-development');
    } else if (itemId === 'faculty-development' && setCurrentPage) {
      setCurrentPage('faculty-development');
    } else if (itemId === 'conference-seminar' && setCurrentPage) {
      setCurrentPage('conference-seminar-workshop');
    } else {
      setExpandedMenu(expandedMenu === itemId ? '' : itemId);
    }
  };

  const menuItems: MenuItem[] = [
    {
      id: 'internal-quality-assurance',
      titleEn: 'Internal Quality Assurance Cell (IQAC)',
      titleHi: 'आंतरिक गुणवत्ता आश्वासन सेल (IQAC)',
      headerTitleEn: 'Internal Quality Assurance Cell (IQAC)',
      headerTitleHi: 'आंतरिक गुणवत्ता आश्वासन सेल (IQAC)',
      descriptionEn: 'The Internal Quality Assurance Cell (IQAC) of Sri Dev Suman Uttarakhand University plays a key role in promoting a culture of continuous improvement across academic and administrative activities. It works to enhance teaching-learning processes, encourage research initiatives, and strengthen institutional transparency. The IQAC regularly collects feedback from students, faculty, and stakeholders to identify areas for development. It also prepares quality reports, coordinates development programs, and ensures that the university meets accreditation and quality standards.',
      descriptionHi: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय का आंतरिक गुणवत्ता आश्वासन सेल (IQAC) शैक्षणिक और प्रशासनिक गतिविधियों में निरंतर सुधार की संस्कृति को बढ़ावा देने में महत्वपूर्ण भूमिका निभाता है। यह शिक्षण-अधिगम प्रक्रियाओं को बढ़ाने, अनुसंधान पहलों को प्रोत्साहित करने और संस्थागत पारदर्शिता को मजबूत करने के लिए काम करता है। IQAC नियमित रूप से छात्रों, संकाय और हितधारकों से प्रतिक्रिया एकत्र करता है। यह गुणवत्ता रिपोर्ट तैयार करता है, विकास कार्यक्रमों का समन्वय करता है और विश्वविद्यालय को मान्यता और गुणवत्ता मानकों को पूरा करने के लिए सुनिश्चित करता है।'
    },
    {
      id: 'center-excellence',
      titleEn: 'Center of Excellence in Entrepreneurship and incubation',
      titleHi: 'उद्यमिता और इनक्यूबेशन में उत्कृष्टता केंद्र'
    },
    {
      id: 'research-development',
      titleEn: 'Research and Development',
      titleHi: 'अनुसंधान और विकास'
    },
    {
      id: 'faculty-development',
      titleEn: 'Faculty Development Centre',
      titleHi: 'संकाय विकास केंद्र'
    },
    {
      id: 'conference-seminar',
      titleEn: 'Conference/Seminar & Workshop',
      titleHi: 'सम्मेलन/सेमिनार और कार्यशाला'
    },
    {
      id: 'mou',
      titleEn: "MOU's",
      titleHi: 'समझौता ज्ञापन'
    }
  ];

  const publications: PublicationCard[] = [
    {
      id: 1,
      titleEn: 'Sports',
      titleHi: 'खेल',
      descriptionEn: 'On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized.',
      descriptionHi: 'दूसरी ओर हम उन लोगों की निंदा करते हैं जो धर्मी असंतोष के साथ बहकाए और निराश हैं।',
      image: '/img/Spicon.png',
      date: 'June 3, 2026'
    },
    {
      id: 2,
      titleEn: 'Skill Development Programs',
      titleHi: 'कौशल विकास कार्यक्रम',
      descriptionEn: 'To take a trivial example which of us ever undertakes laborious physical exercise except.',
      descriptionHi: 'एक मामूली उदाहरण लेने के लिए, हममें से कौन कठोर शारीरिक व्यायाम करता है।',
      image: '/img/e2.jpg',
      date: 'June 3, 2026'
    }
  ];

  const expandedItem = menuItems.find(item => item.id === expandedMenu);
  const headerTitle = language === 'en' ? expandedItem?.headerTitleEn : expandedItem?.headerTitleHi;
  const description = language === 'en' ? expandedItem?.descriptionEn : expandedItem?.descriptionHi;

  return (
    <div className="research-publications">
      <div className="research-container">
        <div className="research-sidebar">
          <h3 className="sidebar-title">Sri Dev Suman University</h3>
          
          {description && (
            <div className="expanded-content">
              <div className="content-header">{headerTitle}</div>
              <p className="content-description">{description}</p>
            </div>
          )}

          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item">
                <button
                  className={`menu-button ${expandedMenu === item.id ? 'active' : ''}`}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  <span>{language === 'en' ? item.titleEn : item.titleHi}</span>
                  <span className="dropdown-icon">▼</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="research-content">
          <div className="featured-image">
            <img src="/img/SECOND.jpg" alt="Research Featured" />
          </div>

          <div className="research-header">
            <h2>{language === 'en' ? 'Research Publication & Book Published' : 'अनुसंधान प्रकाशन और पुस्तक प्रकाशित'}</h2>
            <a href="#" className="read-more">{language === 'en' ? 'Read more...' : 'और अधिक पढ़ें...'}</a>
          </div>

          <div className="publications-list">
            {publications.map((pub) => (
              <div key={pub.id} className="publication-card">
                <div className="publication-image">
                  <img src={pub.image} alt={language === 'en' ? pub.titleEn : pub.titleHi} />
                  <div className="publication-date">{pub.date}</div>
                </div>
                <div className="publication-info">
                  <h3>{language === 'en' ? pub.titleEn : pub.titleHi}</h3>
                  <p>{language === 'en' ? pub.descriptionEn : pub.descriptionHi}</p>
                  <button 
                    className="details-link" 
                    onClick={() => handlePublicationClick(pub.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {language === 'en' ? 'Details' : 'विवरण'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPublications;
