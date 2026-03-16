import React from 'react';
import '../styles/UniversityAffiliatedColleges.css';

interface UniversityAffiliatedCollegesProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const UniversityAffiliatedColleges: React.FC<UniversityAffiliatedCollegesProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'University Affiliated Colleges',
      subtitle: 'Network of Academic Excellence',
      description: 'Sri Dev Suman Uttarakhand University has an extensive network of affiliated colleges spread across the state, maintaining academic standards and supporting student development.',
      stats: [
        { label: 'Affiliated Colleges', value: '45+' },
        { label: 'Students', value: '15000+' },
        { label: 'Districts Covered', value: '13' },
        { label: 'Quality Assurance', value: '100%' }
      ],
      sections: [
        {
          title: 'College Network',
          icon: '🌐',
          description: 'Wide network of colleges providing quality education across districts'
        },
        {
          title: 'Academic Standards',
          icon: '📋',
          description: 'Uniform curriculum and academic standards across all affiliated colleges'
        },
        {
          title: 'Quality Assurance',
          icon: '✓',
          description: 'Regular NAAC accreditation and internal quality audits'
        },
        {
          title: 'Student Support',
          icon: '👥',
          description: 'Comprehensive support services including counseling and guidance'
        },
        {
          title: 'Faculty Development',
          icon: '📚',
          description: 'Regular training and development programs for faculty members'
        },
        {
          title: 'Infrastructure',
          icon: '🏢',
          description: 'Well-equipped libraries, labs, and modern teaching facilities'
        }
      ],
      cta: 'Find a College'
    },
    hi: {
      title: 'विश्वविद्यालय संबद्ध कॉलेज',
      subtitle: 'शैक्षणिक उत्कृष्टता का नेटवर्क',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय का राज्य भर में विस्तारित संबद्ध कॉलेजों का एक व्यापक नेटवर्क है।',
      stats: [
        { label: 'संबद्ध कॉलेज', value: '45+' },
        { label: 'छात्र', value: '15000+' },
        { label: 'जिले कवर किए गए', value: '13' },
        { label: 'गुणवत्ता आश्वासन', value: '100%' }
      ],
      sections: [
        {
          title: 'कॉलेज नेटवर्क',
          icon: '🌐',
          description: 'जिलों में गुणवत्तापूर्ण शिक्षा प्रदान करने वाले कॉलेजों का विस्तृत नेटवर्क'
        },
        {
          title: 'शैक्षणिक मानक',
          icon: '📋',
          description: 'सभी संबद्ध कॉलेजों में समान पाठ्यक्रम और शैक्षणिक मानक'
        },
        {
          title: 'गुणवत्ता आश्वासन',
          icon: '✓',
          description: 'नियमित NAAC मान्यता और आंतरिक गुणवत्ता ऑडिट'
        },
        {
          title: 'छात्र समर्थन',
          icon: '👥',
          description: 'परामर्श और मार्गदर्शन सहित व्यापक समर्थन सेवाएं'
        },
        {
          title: 'संकाय विकास',
          icon: '📚',
          description: 'संकाय सदस्यों के लिए नियमित प्रशिक्षण और विकास कार्यक्रम'
        },
        {
          title: 'बुनियादी ढांचा',
          icon: '🏢',
          description: 'अच्छी तरह से सुसज्जित पुस्तकालय, प्रयोगशालाएं और आधुनिक शिक्षण सुविधाएं'
        }
      ],
      cta: 'कॉलेज खोजें'
    }
  };

  const data = content[language];

  return (
    <div className="university-affiliated-page">
      <div className="university-affiliated-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="university-affiliated-subtitle">{data.subtitle}</p>
      </div>

      <div className="university-affiliated-container">
        <div className="university-affiliated-description">
          <p>{data.description}</p>
        </div>

        <div className="university-affiliated-stats">
          <div className="university-affiliated-stats-grid">
            {data.stats.map((stat, index) => (
              <div key={index} className="university-affiliated-stat-card">
                <div className="university-affiliated-stat-value">{stat.value}</div>
                <div className="university-affiliated-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="university-affiliated-sections">
          <div className="university-affiliated-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="university-affiliated-section-card">
                <div className="university-affiliated-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="university-affiliated-cta">
          <button className="university-affiliated-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default UniversityAffiliatedColleges;
