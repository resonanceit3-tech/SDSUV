import React from 'react';
import '../styles/StudentCouncil.css';

interface StudentCouncilProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const StudentCouncil: React.FC<StudentCouncilProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Student Council',
      subtitle: 'Student Leadership & Governance',
      description: 'The Student Council is a vital part of the university community, representing student interests and organizing diverse campus activities.',
      sections: [
        {
          title: 'Representation',
          icon: '🗳️',
          description: 'Democratically elected representatives from each class and department'
        },
        {
          title: 'Activities',
          icon: '🎉',
          description: 'Organize cultural events, sports, and academic activities throughout the year'
        },
        {
          title: 'Grievance Redressal',
          icon: '📋',
          description: 'Formal mechanism to address student grievances and concerns'
        },
        {
          title: 'Committee Work',
          icon: '👥',
          description: 'Multiple committees for discipline, welfare, and academic support'
        },
        {
          title: 'Student Welfare',
          icon: '🤲',
          description: 'Initiatives for student well-being, health, and financial assistance'
        },
        {
          title: 'Campus Development',
          icon: '🏗️',
          description: 'Participate in campus planning and infrastructure improvements'
        }
      ],
      cta: 'Join Student Council'
    },
    hi: {
      title: 'छात्र परिषद',
      subtitle: 'छात्र नेतृत्व और शासन',
      description: 'छात्र परिषद विश्वविद्यालय समुदाय का एक महत्वपूर्ण हिस्सा है, जो छात्र हितों का प्रतिनिधित्व करती है और विविध परिसर गतिविधियों का आयोजन करती है।',
      sections: [
        {
          title: 'प्रतिनिधित्व',
          icon: '🗳️',
          description: 'प्रत्येक वर्ग और विभाग से लोकतांत्रिक रूप से चुने गए प्रतिनिधि'
        },
        {
          title: 'गतिविधियां',
          icon: '🎉',
          description: 'पूरे साल सांस्कृतिक कार्यक्रम, खेल और शैक्षणिक गतिविधियों का आयोजन'
        },
        {
          title: 'शिकायत निवारण',
          icon: '📋',
          description: 'छात्र शिकायतों और चिंताओं को संबोधित करने के लिए औपचारिक तंत्र'
        },
        {
          title: 'समिति कार्य',
          icon: '👥',
          description: 'अनुशासन, कल्याण और शैक्षणिक समर्थन के लिए कई समितियां'
        },
        {
          title: 'छात्र कल्याण',
          icon: '🤲',
          description: 'छात्र कल्याण, स्वास्थ्य और वित्तीय सहायता के लिए पहल'
        },
        {
          title: 'परिसर विकास',
          icon: '🏗️',
          description: 'परिसर योजना और बुनियादी ढांचे सुधार में भाग लें'
        }
      ],
      cta: 'छात्र परिषद में शामिल हों'
    }
  };

  const data = content[language];

  return (
    <div className="student-council-page">
      <div className="student-council-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="student-council-subtitle">{data.subtitle}</p>
      </div>

      <div className="student-council-container">
        <div className="student-council-description">
          <p>{data.description}</p>
        </div>

        <div className="student-council-sections-section">
          <div className="student-council-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="student-council-section-card">
                <div className="student-council-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="student-council-cta-section">
          <button className="student-council-submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default StudentCouncil;
