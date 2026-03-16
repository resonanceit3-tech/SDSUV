import React from 'react';
import '../styles/StudentHelpDesk.css';

interface StudentHelpDeskProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const StudentHelpDesk: React.FC<StudentHelpDeskProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Student Help Desk',
      subtitle: 'Support & Assistance',
      description: 'The Student Help Desk provides comprehensive support for academic queries, administrative issues, and student welfare concerns.',
      sections: [
        {
          title: 'Answer Book Viewing',
          icon: '📄',
          description: 'Access your answer sheets for evaluation and review processes'
        },
        {
          title: 'Challenge Evaluation',
          icon: '⚖️',
          description: 'File evaluation challenges and recheck requests for disputed marks'
        },
        {
          title: 'Academic Support',
          icon: '📚',
          description: 'Guidance on course requirements, assignments, and academic planning'
        },
        {
          title: 'Administrative Help',
          icon: '📋',
          description: 'Assistance with registrations, certifications, and document processing'
        },
        {
          title: 'Technical Support',
          icon: '💻',
          description: 'Help with online learning platform, email, and IT-related issues'
        },
        {
          title: 'General Queries',
          icon: '❓',
          description: '24/7 support for general questions and student concerns'
        }
      ],
      cta: 'Contact Help Desk'
    },
    hi: {
      title: 'छात्र सहायता डेस्क',
      subtitle: 'समर्थन और सहायता',
      description: 'छात्र सहायता डेस्क शैक्षणिक प्रश्नों, प्रशासनिक समस्याओं और छात्र कल्याण संबंधी चिंताओं के लिए व्यापक समर्थन प्रदान करता है।',
      sections: [
        {
          title: 'उत्तर पुस्तक देखना',
          icon: '📄',
          description: 'मूल्यांकन और समीक्षा प्रक्रियाओं के लिए अपनी उत्तर पत्रकों तक पहुंचें'
        },
        {
          title: 'मूल्यांकन चुनौती',
          icon: '⚖️',
          description: 'विवादित अंकों के लिए मूल्यांकन चुनौतियां और पुनः जांच अनुरोध दायर करें'
        },
        {
          title: 'शैक्षणिक समर्थन',
          icon: '📚',
          description: 'पाठ्यक्रम आवश्यकताओं, असाइनमेंट और शैक्षणिक योजना पर मार्गदर्शन'
        },
        {
          title: 'प्रशासनिक सहायता',
          icon: '📋',
          description: 'पंजीकरण, प्रमाण पत्र और दस्तावेज प्रसंस्करण में सहायता'
        },
        {
          title: 'तकनीकी समर्थन',
          icon: '💻',
          description: 'ऑनलाइन लर्निंग प्लेटफॉर्म, ईमेल और आईटी संबंधित समस्याओं में मदद'
        },
        {
          title: 'सामान्य प्रश्न',
          icon: '❓',
          description: 'सामान्य प्रश्नों और छात्र चिंताओं के लिए 24/7 समर्थन'
        }
      ],
      cta: 'सहायता डेस्क से संपर्क करें'
    }
  };

  const data = content[language];

  return (
    <div className="student-help-desk-page">
      <div className="student-help-desk-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="student-help-desk-subtitle">{data.subtitle}</p>
      </div>

      <div className="student-help-desk-container">
        <div className="student-help-desk-description">
          <p>{data.description}</p>
        </div>

        <div className="student-help-desk-sections-section">
          <div className="student-help-desk-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="student-help-desk-section-card">
                <div className="student-help-desk-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="student-help-desk-cta-section">
          <button className="student-help-desk-submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default StudentHelpDesk;
