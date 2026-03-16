import React from 'react';
import '../styles/PrivateColleges.css';

interface PrivateCollegesProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const PrivateColleges: React.FC<PrivateCollegesProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Private Colleges',
      subtitle: 'Premium Educational Institutions',
      description: 'Affiliated private colleges offering specialized programs and premium education with state-of-the-art infrastructure and innovative teaching methods.',
      stats: [
        { label: 'Private Colleges', value: '12+' },
        { label: 'Students', value: '5000+' },
        { label: 'Specializations', value: '50+' },
        { label: 'Placement Rate', value: '85%' }
      ],
      sections: [
        {
          title: 'Premium Infrastructure',
          icon: '🏢',
          description: 'State-of-the-art facilities, smart classrooms, and advanced labs'
        },
        {
          title: 'Specialized Programs',
          icon: '🎯',
          description: 'Niche courses and specialized programs not available elsewhere'
        },
        {
          title: 'Industry Integration',
          icon: '🏭',
          description: 'Strong industry partnerships for internships and placements'
        },
        {
          title: 'Experienced Faculty',
          icon: '👨‍💼',
          description: 'Faculty with industry experience and advanced qualifications'
        },
        {
          title: 'Career Development',
          icon: '📈',
          description: 'Comprehensive career counseling and professional development programs'
        },
        {
          title: 'Global Standards',
          icon: '🌍',
          description: 'International quality standards and exchange programs'
        }
      ],
      cta: 'View Colleges'
    },
    hi: {
      title: 'निजी कॉलेज',
      subtitle: 'प्रीमियम शैक्षणिक संस्थान',
      description: 'अत्याधुनिक बुनियादी ढांचे और अभिनव शिक्षण विधियों के साथ विशेष कार्यक्रम और प्रीमियम शिक्षा प्रदान करने वाले संबद्ध निजी कॉलेज।',
      stats: [
        { label: 'निजी कॉलेज', value: '12+' },
        { label: 'छात्र', value: '5000+' },
        { label: 'विशेषज्ञताएं', value: '50+' },
        { label: 'प्लेसमेंट दर', value: '85%' }
      ],
      sections: [
        {
          title: 'प्रीमियम बुनियादी ढांचा',
          icon: '🏢',
          description: 'अत्याधुनिक सुविधाएं, स्मार्ट कक्षाएं और उन्नत प्रयोगशालाएं'
        },
        {
          title: 'विशेष कार्यक्रम',
          icon: '🎯',
          description: 'विशेष पाठ्यक्रम और विशेष कार्यक्रम जो अन्यत्र उपलब्ध नहीं हैं'
        },
        {
          title: 'उद्योग एकीकरण',
          icon: '🏭',
          description: 'इंटर्नशिप और प्लेसमेंट के लिए मजबूत उद्योग साझेदारी'
        },
        {
          title: 'अनुभवी संकाय',
          icon: '👨‍💼',
          description: 'उद्योग अनुभव और उन्नत योग्यताओं के साथ संकाय'
        },
        {
          title: 'कैरियर विकास',
          icon: '📈',
          description: 'व्यापक कैरियर परामर्श और व्यावसायिक विकास कार्यक्रम'
        },
        {
          title: 'वैश्विक मानक',
          icon: '🌍',
          description: 'अंतर्राष्ट्रीय गुणवत्ता मानक और विनिमय कार्यक्रम'
        }
      ],
      cta: 'कॉलेज देखें'
    }
  };

  const data = content[language];

  return (
    <div className="private-colleges-page">
      <div className="private-colleges-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="private-colleges-subtitle">{data.subtitle}</p>
      </div>

      <div className="private-colleges-container">
        <div className="private-colleges-description">
          <p>{data.description}</p>
        </div>

        <div className="private-colleges-stats">
          <div className="private-colleges-stats-grid">
            {data.stats.map((stat, index) => (
              <div key={index} className="private-colleges-stat-card">
                <div className="private-colleges-stat-value">{stat.value}</div>
                <div className="private-colleges-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="private-colleges-sections">
          <div className="private-colleges-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="private-colleges-section-card">
                <div className="private-colleges-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="private-colleges-cta">
          <button className="private-colleges-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default PrivateColleges;
