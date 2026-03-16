import React from 'react';
import '../styles/CommerceJournal.css';

interface CommerceJournalProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const CommerceJournal: React.FC<CommerceJournalProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Commerce Journal',
      subtitle: 'Business & Economic Research Publication',
      description: 'A leading journal for publishing research in commerce, management, economics, and business administration.',
      stats: [
        { label: 'Published Issues', value: '20+' },
        { label: 'Research Papers', value: '400+' },
        { label: 'Active Reviewers', value: '120+' },
        { label: 'Impact Factor', value: '3.8' }
      ],
      sections: [
        {
          title: 'Accounting',
          icon: '📊',
          description: 'Financial accounting and auditing research'
        },
        {
          title: 'Economics',
          icon: '💹',
          description: 'Economic theories and policy analysis'
        },
        {
          title: 'Management',
          icon: '💼',
          description: 'Business management and strategy'
        },
        {
          title: 'Finance',
          icon: '💰',
          description: 'Corporate finance and investments'
        },
        {
          title: 'Marketing',
          icon: '🎯',
          description: 'Marketing strategy and consumer behavior'
        },
        {
          title: 'Entrepreneurship',
          icon: '🚀',
          description: 'New venture creation and innovation'
        }
      ],
      cta: 'Submit Your Paper'
    },
    hi: {
      title: 'वाणिज्य पत्रिका',
      subtitle: 'व्यावसायिक और आर्थिक अनुसंधान प्रकाशन',
      description: 'वाणिज्य, प्रबंधन, अर्थशास्त्र और व्यावसायिक प्रशासन में अनुसंधान प्रकाशित करने के लिए एक अग्रणी पत्रिका।',
      stats: [
        { label: 'प्रकाशित अंक', value: '20+' },
        { label: 'अनुसंधान पत्र', value: '400+' },
        { label: 'सक्रिय समीक्षक', value: '120+' },
        { label: 'प्रभाव कारक', value: '3.8' }
      ],
      sections: [
        {
          title: 'लेखांकन',
          icon: '📊',
          description: 'वित्तीय लेखांकन और ऑडिटिंग अनुसंधान'
        },
        {
          title: 'अर्थशास्त्र',
          icon: '💹',
          description: 'आर्थिक सिद्धांत और नीति विश्लेषण'
        },
        {
          title: 'प्रबंधन',
          icon: '💼',
          description: 'व्यावसायिक प्रबंधन और रणनीति'
        },
        {
          title: 'वित्त',
          icon: '💰',
          description: 'कॉर्पोरेट वित्त और निवेश'
        },
        {
          title: 'विपणन',
          icon: '🎯',
          description: 'विपणन रणनीति और उपभोक्ता व्यवहार'
        },
        {
          title: 'उद्यमिता',
          icon: '🚀',
          description: 'नई उद्यम निर्माण और नवाचार'
        }
      ],
      cta: 'अपना पेपर जमा करें'
    }
  };

  const data = content[language];

  return (
    <div className="commerce-journal-page">
      <div className="commerce-journal-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="commerce-journal-subtitle">{data.subtitle}</p>
      </div>

      <div className="commerce-journal-container">
        <div className="commerce-journal-description">
          <p>{data.description}</p>
        </div>

        <div className="commerce-stats-section">
          <div className="commerce-stats-grid">
            {data.stats.map((stat, index) => (
              <div key={index} className="commerce-stat-card">
                <div className="commerce-stat-value">{stat.value}</div>
                <div className="commerce-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="commerce-sections-section">
          <h2>Research Sections</h2>
          <div className="commerce-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="commerce-section-card">
                <div className="commerce-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="commerce-cta-section">
          <button className="commerce-submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default CommerceJournal;
