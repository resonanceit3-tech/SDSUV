import React from 'react';
import '../styles/WomenCell.css';

interface WomenCellProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const WomenCell: React.FC<WomenCellProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Women Cell',
      subtitle: 'Support & Empowerment',
      description: 'The Women Cell provides comprehensive support, guidance, and empowerment programs for female students at Sri Dev Suman University.',
      sections: [
        {
          title: 'Safety & Protection',
          icon: '🛡️',
          description: 'Measures to ensure campus safety and protection of women students'
        },
        {
          title: 'Counseling Services',
          icon: '💬',
          description: 'Professional counseling and psychological support for women students'
        },
        {
          title: 'Grievance Redressal',
          icon: '📋',
          description: 'Confidential mechanism for reporting and resolving complaints'
        },
        {
          title: 'Mentorship Programs',
          icon: '👩‍🏫',
          description: 'Guidance and mentoring for academic and professional development'
        },
        {
          title: 'Leadership Training',
          icon: '⭐',
          description: 'Programs for skill development and leadership enhancement'
        },
        {
          title: 'Practical Leave',
          icon: '📝',
          description: 'Apply for medical or maternity leave and other special provisions'
        }
      ],
      cta: 'Contact Women Cell'
    },
    hi: {
      title: 'महिला कक्ष',
      subtitle: 'समर्थन और सशक्तिकरण',
      description: 'महिला कक्ष श्री देव सुमन उत्तरांचल विश्वविद्यालय में महिला छात्रों के लिए व्यापक समर्थन, मार्गदर्शन और सशक्तिकरण कार्यक्रम प्रदान करता है।',
      sections: [
        {
          title: 'सुरक्षा और संरक्षण',
          icon: '🛡️',
          description: 'परिसर सुरक्षा सुनिश्चित करने और महिला छात्रों की सुरक्षा के लिए उपाय'
        },
        {
          title: 'परामर्श सेवाएं',
          icon: '💬',
          description: 'महिला छात्रों के लिए व्यावसायिक परामर्श और मनोवैज्ञानिक समर्थन'
        },
        {
          title: 'शिकायत निवारण',
          icon: '📋',
          description: 'शिकायतों की रिपोर्टिंग और समाधान के लिए गोपनीय तंत्र'
        },
        {
          title: 'संरक्षकता कार्यक्रम',
          icon: '👩‍🏫',
          description: 'शैक्षणिक और व्यावसायिक विकास के लिए मार्गदर्शन और संरक्षकता'
        },
        {
          title: 'नेतृत्व प्रशिक्षण',
          icon: '⭐',
          description: 'कौशल विकास और नेतृत्व वृद्धि के लिए कार्यक्रम'
        },
        {
          title: 'व्यावहारिक अवकाश',
          icon: '📝',
          description: 'चिकित्सा या मातृत्व अवकाश और अन्य विशेष प्रावधानों के लिए आवेदन करें'
        }
      ],
      cta: 'महिला कक्ष से संपर्क करें'
    }
  };

  const data = content[language];

  return (
    <div className="women-cell-page">
      <div className="women-cell-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="women-cell-subtitle">{data.subtitle}</p>
      </div>

      <div className="women-cell-container">
        <div className="women-cell-description">
          <p>{data.description}</p>
        </div>

        <div className="women-cell-sections-section">
          <div className="women-cell-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="women-cell-section-card">
                <div className="women-cell-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="women-cell-cta-section">
          <button className="women-cell-submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default WomenCell;
