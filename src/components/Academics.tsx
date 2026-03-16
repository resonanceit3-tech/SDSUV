import React from 'react';
import '../styles/Academics.css';

interface AcademicsProps {
  language: 'en' | 'hi';
  onBack: () => void;
  onHome?: () => void;
}

const Academics: React.FC<AcademicsProps> = ({ language, onBack, onHome }) => {
  const academicPrograms = [
    {
      id: 1,
      nameEn: 'Undergraduate Programs',
      nameHi: 'स्नातक कार्यक्रम',
      descriptionEn: 'Comprehensive 3-year bachelor degree programs',
      descriptionHi: '3 वर्षीय व्यापक स्नातक डिग्री कार्यक्रम',
      icon: '📚'
    },
    {
      id: 2,
      nameEn: 'Postgraduate Programs',
      nameHi: 'स्नातकोत्तर कार्यक्रम',
      descriptionEn: 'Advanced master and doctoral degree programs',
      descriptionHi: 'उन्नत मास्टर और डॉक्टरेट डिग्री कार्यक्रम',
      icon: '🎓'
    },
    {
      id: 3,
      nameEn: 'Research Centers',
      nameHi: 'अनुसंधान केंद्र',
      descriptionEn: 'State-of-the-art research facilities and labs',
      descriptionHi: 'अत्याधुनिक अनुसंधान सुविधाएं और प्रयोगशालाएं',
      icon: '🔬'
    },
    {
      id: 4,
      nameEn: 'Online Courses',
      nameHi: 'ऑनलाइन पाठ्यक्रम',
      descriptionEn: 'Flexible online education for working professionals',
      descriptionHi: 'कामकाजी पेशेवरों के लिए लचीली ऑनलाइन शिक्षा',
      icon: '💻'
    },
    {
      id: 5,
      nameEn: 'Skill Development',
      nameHi: 'कौशल विकास',
      descriptionEn: 'Industry-relevant skill training programs',
      descriptionHi: 'उद्योग प्रासंगिक कौशल प्रशिक्षण कार्यक्रम',
      icon: '🛠️'
    },
    {
      id: 6,
      nameEn: 'Exchange Programs',
      nameHi: 'विनिमय कार्यक्रम',
      descriptionEn: 'International exchange and collaboration programs',
      descriptionHi: 'अंतर्राष्ट्रीय विनिमय और सहयोग कार्यक्रम',
      icon: '🌍'
    }
  ];

  return (
    <div className="academics-page">
      <div className="navigation-buttons">
        <button className="back-button" onClick={onBack}>
          ← {language === 'en' ? 'Back' : 'पीछे'}
        </button>
        <button className="home-button" onClick={onHome || onBack}>
          🏠 {language === 'en' ? 'Home' : 'होम'}
        </button>
      </div>

      <div className="academics-container">
        <div className="academics-header">
          <h1>{language === 'en' ? 'Academic Excellence' : 'शैक्षणिक उत्कृष्टता'}</h1>
          <p>{language === 'en' ? 'World-class education with innovative teaching methodologies' : 'अभिनव शिक्षण पद्धति के साथ विश्व स्तरीय शिक्षा'}</p>
        </div>

        <div className="academics-info-section">
          <h2>{language === 'en' ? 'Our Academic Vision' : 'हमारी शैक्षणिक दृष्टि'}</h2>
          <p>{language === 'en' 
            ? 'We are committed to providing world-class education that combines theoretical knowledge with practical skills. Our faculty comprises distinguished scholars and researchers who are dedicated to mentoring the next generation of leaders, innovators, and professionals.'
            : 'हम ऐसी विश्व स्तरीय शिक्षा प्रदान करने के लिए प्रतिबद्ध हैं जो सैद्धांतिक ज्ञान को व्यावहारिक कौशल के साथ जोड़ता है। हमारा संकाय प्रतिष्ठित विद्वानों और शोधकर्ताओं से बना है जो अगली पीढ़ी के नेताओं, नवप्रवर्तकों और पेशेवरों का मार्गदर्शन करने के लिए समर्पित हैं।'
          }</p>
        </div>

        <div className="academics-programs">
          <h2>{language === 'en' ? 'Academic Programs' : 'शैक्षणिक कार्यक्रम'}</h2>
          <div className="programs-grid">
            {academicPrograms.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-icon">{program.icon}</div>
                <h3>{language === 'en' ? program.nameEn : program.nameHi}</h3>
                <p>{language === 'en' ? program.descriptionEn : program.descriptionHi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="academics-highlights">
          <h2>{language === 'en' ? 'Why Choose Our Academics' : 'हमारी शिक्षा क्यों चुनें'}</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <h3>{language === 'en' ? 'Expert Faculty' : 'विशेषज्ञ संकाय'}</h3>
              <p>{language === 'en' ? 'Highly qualified and experienced faculty members' : 'अत्यधिक योग्य और अनुभवी संकाय सदस्य'}</p>
            </div>
            <div className="highlight-card">
              <h3>{language === 'en' ? 'Modern Infrastructure' : 'आधुनिक बुनियादी ढांचा'}</h3>
              <p>{language === 'en' ? 'State-of-the-art facilities and technology' : 'अत्याधुनिक सुविधाएं और तकनीक'}</p>
            </div>
            <div className="highlight-card">
              <h3>{language === 'en' ? 'Industry Integration' : 'उद्योग एकीकरण'}</h3>
              <p>{language === 'en' ? 'Strong partnerships with leading industries' : 'प्रमुख उद्योगों के साथ मजबूत भागीदारी'}</p>
            </div>
            <div className="highlight-card">
              <h3>{language === 'en' ? 'Global Recognition' : 'वैश्विक मान्यता'}</h3>
              <p>{language === 'en' ? 'Internationally recognized degrees and programs' : 'अंतर्राष्ट्रीय स्तर पर मान्यता प्राप्त डिग्री'}</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>{language === 'en' ? 'Contact Academic Affairs' : 'शैक्षणिक कार्यों से संपर्क करें'}</h2>
          <p>{language === 'en' ? 'Email: academics@university.edu | Phone: +91-XXX-XXXX-XXXX' : 'ईमेल: academics@university.edu | फोन: +91-XXX-XXXX-XXXX'}</p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
