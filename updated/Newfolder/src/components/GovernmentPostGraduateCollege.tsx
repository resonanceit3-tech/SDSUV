import React from 'react';
import '../styles/GovernmentPostGraduateCollege.css';

interface GovernmentPostGraduateCollegeProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const GovernmentPostGraduateCollege: React.FC<GovernmentPostGraduateCollegeProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Government Post Graduate College',
      subtitle: 'Gopeshwar, Chamoli',
      description: 'A constituent college of Sri Dev Suman Uttarakhand University located in the scenic Chamoli district, providing quality postgraduate education to students.',
      stats: [
        { label: 'Location', value: 'Chamoli' },
        { label: 'PG Programs', value: '8+' },
        { label: 'Faculty', value: '50+' },
        { label: 'Students', value: '400+' }
      ],
      sections: [
        {
          title: 'Postgraduate Programs',
          icon: '🎓',
          description: 'MSc and MA programs in Science and Humanities'
        },
        {
          title: 'Scenic Campus',
          icon: '🏔️',
          description: 'Located in the beautiful Chamoli district with natural surroundings'
        },
        {
          title: 'Academic Standards',
          icon: '⭐',
          description: 'High academic standards and rigorous curriculum'
        },
        {
          title: 'Laboratory Facilities',
          icon: '🧪',
          description: 'Well-equipped science laboratories for practical learning'
        },
        {
          title: 'Community Engagement',
          icon: '🤝',
          description: 'Active engagement with local community and research initiatives'
        },
        {
          title: 'Hostel Facilities',
          icon: '🏠',
          description: 'Accommodation available for resident and non-local students'
        }
      ],
      cta: 'Learn More'
    },
    hi: {
      title: 'सरकारी स्नातकोत्तर कॉलेज',
      subtitle: 'गोपेश्वर, चमोली',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय का एक संघटक कॉलेज जो सुंदर चमोली जिले में स्थित है।',
      stats: [
        { label: 'स्थान', value: 'चमोली' },
        { label: 'पीजी कार्यक्रम', value: '8+' },
        { label: 'संकाय', value: '50+' },
        { label: 'छात्र', value: '400+' }
      ],
      sections: [
        {
          title: 'स्नातकोत्तर कार्यक्रम',
          icon: '🎓',
          description: 'विज्ञान और मानविकी में MSc और MA कार्यक्रम'
        },
        {
          title: 'सुंदर परिसर',
          icon: '🏔️',
          description: 'चमोली जिले में प्राकृतिक परिवेश के साथ स्थित'
        },
        {
          title: 'शैक्षणिक मानक',
          icon: '⭐',
          description: 'उच्च शैक्षणिक मानक और कठोर पाठ्यक्रम'
        },
        {
          title: 'प्रयोगशाला सुविधाएं',
          icon: '🧪',
          description: 'व्यावहारिक शिक्षण के लिए अच्छी तरह से सुसज्जित विज्ञान प्रयोगशालाएं'
        },
        {
          title: 'समुदाय जुड़ाव',
          icon: '🤝',
          description: 'स्थानीय समुदाय और अनुसंधान पहलों के साथ सक्रिय जुड़ाव'
        },
        {
          title: 'छात्रावास सुविधाएं',
          icon: '🏠',
          description: 'निवासी और गैर-स्थानीय छात्रों के लिए आवास उपलब्ध'
        }
      ],
      cta: 'और जानें'
    }
  };

  const data = content[language];

  return (
    <div className="government-post-grad-page">
      <div className="government-post-grad-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="government-post-grad-subtitle">{data.subtitle}</p>
      </div>

      <div className="government-post-grad-container">
        <div className="government-post-grad-description">
          <p>{data.description}</p>
        </div>

        <div className="government-post-grad-stats">
          <div className="government-post-grad-stats-grid">
            {data.stats.map((stat, index) => (
              <div key={index} className="government-post-grad-stat-card">
                <div className="government-post-grad-stat-value">{stat.value}</div>
                <div className="government-post-grad-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="government-post-grad-sections">
          <div className="government-post-grad-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="government-post-grad-section-card">
                <div className="government-post-grad-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="government-post-grad-cta">
          <button className="government-post-grad-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default GovernmentPostGraduateCollege;
