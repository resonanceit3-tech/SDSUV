import React from 'react';
import '../styles/UniversityCampus.css';

interface UniversityCampusProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const UniversityCampus: React.FC<UniversityCampusProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'University Campus',
      subtitle: 'Main Academic Campus',
      description: 'The University Campus serves as the primary academic and administrative hub of Sri Dev Suman Uttarakhand University, hosting state-of-the-art facilities and comprehensive academic programs.',
      stats: [
        { label: 'Established', value: '2019' },
        { label: 'Students', value: '5000+' },
        { label: 'Faculty', value: '450+' },
        { label: 'Programs', value: '50+' }
      ],
      sections: [
        {
          title: 'Academic Excellence',
          icon: '🎓',
          description: 'UG and PG programs across Science, Commerce, and Arts disciplines'
        },
        {
          title: 'Modern Infrastructure',
          icon: '🏗️',
          description: 'Advanced laboratories, library, sports facilities, and smart classrooms'
        },
        {
          title: 'Research Centers',
          icon: '🔬',
          description: 'Dedicated research labs and innovation centers for faculty and students'
        },
        {
          title: 'Student Life',
          icon: '🎯',
          description: 'Hostel facilities, cultural events, sports, and extracurricular activities'
        },
        {
          title: 'Campus Amenities',
          icon: '🌳',
          description: 'Green campus with cafeteria, health center, and recreational facilities'
        },
        {
          title: 'Placement Cell',
          icon: '💼',
          description: 'Dedicated placement support with 85% placement record'
        }
      ],
      cta: 'Apply Now'
    },
    hi: {
      title: 'विश्वविद्यालय परिसर',
      subtitle: 'मुख्य अकादमिक परिसर',
      description: 'विश्वविद्यालय परिसर श्री देव सुमन उत्तरांचल विश्वविद्यालय के प्राथमिक शैक्षणिक और प्रशासनिक केंद्र के रूप में कार्य करता है।',
      stats: [
        { label: 'स्थापित', value: '2019' },
        { label: 'छात्र', value: '5000+' },
        { label: 'संकाय', value: '450+' },
        { label: 'कार्यक्रम', value: '50+' }
      ],
      sections: [
        {
          title: 'शैक्षणिक उत्कृष्टता',
          icon: '🎓',
          description: 'विज्ञान, वाणिज्य और कला विषयों में स्नातक और स्नातकोत्तर कार्यक्रम'
        },
        {
          title: 'आधुनिक बुनियादी ढांचा',
          icon: '🏗️',
          description: 'उन्नत प्रयोगशालाएं, पुस्तकालय, खेल सुविधाएं और स्मार्ट कक्षाएं'
        },
        {
          title: 'अनुसंधान केंद्र',
          icon: '🔬',
          description: 'संकाय और छात्रों के लिए समर्पित अनुसंधान प्रयोगशालाएं'
        },
        {
          title: 'छात्र जीवन',
          icon: '🎯',
          description: 'छात्रावास सुविधाएं, सांस्कृतिक कार्यक्रम, खेल और पाठ्येतर गतिविधियां'
        },
        {
          title: 'परिसर सुविधाएं',
          icon: '🌳',
          description: 'हरे परिसर में कैफेटेरिया, स्वास्थ्य केंद्र और मनोरंजन सुविधाएं'
        },
        {
          title: 'प्लेसमेंट सेल',
          icon: '💼',
          description: '85% प्लेसमेंट रिकॉर्ड के साथ समर्पित प्लेसमेंट सहायता'
        }
      ],
      cta: 'अभी आवेदन करें'
    }
  };

  const data = content[language];

  return (
    <div className="university-campus-page">
      <div className="university-campus-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="university-campus-subtitle">{data.subtitle}</p>
      </div>

      <div className="university-campus-container">
        <div className="university-campus-description">
          <p>{data.description}</p>
        </div>

        <div className="university-campus-stats">
          <div className="university-campus-stats-grid">
            {data.stats.map((stat, index) => (
              <div key={index} className="university-campus-stat-card">
                <div className="university-campus-stat-value">{stat.value}</div>
                <div className="university-campus-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="university-campus-sections">
          <div className="university-campus-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="university-campus-section-card">
                <div className="university-campus-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="university-campus-cta">
          <button className="university-campus-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default UniversityCampus;
