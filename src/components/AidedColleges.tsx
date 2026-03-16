import React from 'react';
import '../styles/AidedColleges.css';

interface AidedCollegesProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const AidedColleges: React.FC<AidedCollegesProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Aided Colleges',
      subtitle: 'Government-Assisted Private Institutions',
      description: 'Aided colleges are private institutions that receive government funding while maintaining academic standards and admission policies of the university.',
      stats: [
        { label: 'Aided Colleges', value: '15' },
        { label: 'Students', value: '6000+' },
        { label: 'Programs Offered', value: '40+' },
        { label: 'Faculty Members', value: '400+' }
      ],
      sections: [
        {
          title: 'Hybrid Model',
          icon: '🤝',
          description: 'Combines private initiative with government support and funding'
        },
        {
          title: 'Quality Standards',
          icon: '⭐',
          description: 'Maintains university standards while offering specialized programs'
        },
        {
          title: 'Affordable Fees',
          icon: '💳',
          description: 'More affordable than purely private colleges due to government aid'
        },
        {
          title: 'Diverse Offerings',
          icon: '🎓',
          description: 'Wide range of courses and specializations available'
        },
        {
          title: 'Modern Facilities',
          icon: '🏗️',
          description: 'Well-equipped classrooms, labs, and digital learning resources'
        },
        {
          title: 'Industry Interaction',
          icon: '💼',
          description: 'Strong connections with industry for internships and placements'
        }
      ],
      cta: 'Explore Options'
    },
    hi: {
      title: 'सहायता प्राप्त कॉलेज',
      subtitle: 'सरकार द्वारा सहायता प्राप्त निजी संस्थान',
      description: 'सहायता प्राप्त कॉलेज निजी संस्थान हैं जो विश्वविद्यालय के शैक्षणिक मानकों को बनाए रखते हुए सरकारी वित्तपोषण प्राप्त करते हैं।',
      stats: [
        { label: 'सहायता प्राप्त कॉलेज', value: '15' },
        { label: 'छात्र', value: '6000+' },
        { label: 'प्रस्तावित कार्यक्रम', value: '40+' },
        { label: 'संकाय सदस्य', value: '400+' }
      ],
      sections: [
        {
          title: 'संकर मॉडल',
          icon: '🤝',
          description: 'निजी पहल को सरकारी समर्थन और वित्तपोषण के साथ जोड़ता है'
        },
        {
          title: 'गुणवत्ता मानक',
          icon: '⭐',
          description: 'विश्वविद्यालय मानकों को बनाए रखते हुए विशेष कार्यक्रम प्रदान करता है'
        },
        {
          title: 'सस्ती फीस',
          icon: '💳',
          description: 'सरकारी सहायता के कारण विशुद्ध निजी कॉलेजों की तुलना में अधिक सस्ती'
        },
        {
          title: 'विविध प्रस्ताव',
          icon: '🎓',
          description: 'विस्तृत पाठ्यक्रम और विशेषज्ञताएं उपलब्ध'
        },
        {
          title: 'आधुनिक सुविधाएं',
          icon: '🏗️',
          description: 'अच्छी तरह से सुसज्जित कक्षाएं, प्रयोगशालाएं और डिजिटल शिक्षण संसाधन'
        },
        {
          title: 'उद्योग संपर्क',
          icon: '💼',
          description: 'इंटर्नशिप और प्लेसमेंट के लिए उद्योग के साथ मजबूत कनेक्शन'
        }
      ],
      cta: 'विकल्प देखें'
    }
  };

  const data = content[language];

  return (
    <div className="aided-colleges-page">
      <div className="aided-colleges-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="aided-colleges-subtitle">{data.subtitle}</p>
      </div>

      <div className="aided-colleges-container">
        <div className="aided-colleges-description">
          <p>{data.description}</p>
        </div>

        <div className="aided-colleges-stats">
          <div className="aided-colleges-stats-grid">
            {data.stats.map((stat, index) => (
              <div key={index} className="aided-colleges-stat-card">
                <div className="aided-colleges-stat-value">{stat.value}</div>
                <div className="aided-colleges-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="aided-colleges-sections">
          <div className="aided-colleges-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="aided-colleges-section-card">
                <div className="aided-colleges-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="aided-colleges-cta">
          <button className="aided-colleges-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default AidedColleges;
