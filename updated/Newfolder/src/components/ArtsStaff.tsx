import React from 'react';
import '../styles/ArtsStaff.css';

interface ArtsStaffProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const ArtsStaff: React.FC<ArtsStaffProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Arts Faculty Staff',
      subtitle: 'Cultivating Critical Thinking and Creativity',
      description: 'Our Arts Faculty is dedicated to fostering intellectual growth, critical thinking, and creative expression among students.',
      departments: [
        {
          name: 'English Department',
          icon: '📚',
          description: 'Literature, linguistics, and communication skills'
        },
        {
          name: 'Hindi Department',
          icon: '📖',
          description: 'Hindi literature and language studies'
        },
        {
          name: 'History Department',
          icon: '📜',
          description: 'Historical studies and research'
        },
        {
          name: 'Political Science',
          icon: '🏛️',
          description: 'Political theory and governance studies'
        },
        {
          name: 'Psychology Department',
          icon: '🧠',
          description: 'Human behavior and mental sciences'
        },
        {
          name: 'Philosophy Department',
          icon: '💭',
          description: 'Philosophy and ethical studies'
        }
      ],
      highlights: [
        { title: 'Holistic Education', description: 'Comprehensive curriculum fostering critical thinking' },
        { title: 'Creative Development', description: 'Programs promoting artistic and creative expression' },
        { title: 'Research Opportunities', description: 'Regular seminars, workshops, and research projects' },
        { title: 'Mentorship Programs', description: 'One-on-one guidance and academic counseling' }
      ],
      contact: 'For more information about Arts Faculty, please contact us'
    },
    hi: {
      title: 'कला संकाय कर्मचारी',
      subtitle: 'आलोचनात्मक सोच और रचनात्मकता का पोषण',
      description: 'हमारा कला संकाय बौद्धिक विकास, आलोचनात्मक सोच और छात्रों में रचनात्मक अभिव्यक्ति को बढ़ावा देने के लिए समर्पित है।',
      departments: [
        {
          name: 'अंग्रेजी विभाग',
          icon: '📚',
          description: 'साहित्य, भाषाविज्ञान और संचार कौशल'
        },
        {
          name: 'हिंदी विभाग',
          icon: '📖',
          description: 'हिंदी साहित्य और भाषा अध्ययन'
        },
        {
          name: 'इतिहास विभाग',
          icon: '📜',
          description: 'ऐतिहासिक अध्ययन और अनुसंधान'
        },
        {
          name: 'राजनीति विज्ञान',
          icon: '🏛️',
          description: 'राजनीतिक सिद्धांत और शासन अध्ययन'
        },
        {
          name: 'मनोविज्ञान विभाग',
          icon: '🧠',
          description: 'मानव व्यवहार और मानसिक विज्ञान'
        },
        {
          name: 'दर्शन विभाग',
          icon: '💭',
          description: 'दर्शन और नैतिक अध्ययन'
        }
      ],
      highlights: [
        { title: 'समग्र शिक्षा', description: 'आलोचनात्मक सोच को बढ़ावा देने वाला व्यापक पाठ्यक्रम' },
        { title: 'रचनात्मक विकास', description: 'कलात्मक और रचनात्मक अभिव्यक्ति को बढ़ावा देने वाले कार्यक्रम' },
        { title: 'अनुसंधान के अवसर', description: 'नियमित सेमिनार, कार्यशालाएं और अनुसंधान परियोजनाएं' },
        { title: 'मेंटरशिप कार्यक्रम', description: 'एक-एक व्यक्तिगत मार्गदर्शन और शैक्षणिक परामर्श' }
      ],
      contact: 'कला संकाय के बारे में अधिक जानकारी के लिए, कृपया हमसे संपर्क करें'
    }
  };

  const data = content[language];

  return (
    <div className="staff-page">
      <div className="staff-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="staff-subtitle">{data.subtitle}</p>
      </div>

      <div className="staff-container">
        <div className="staff-description">
          <p>{data.description}</p>
        </div>

        <div className="departments-section">
          <h2>Departments & Programs</h2>
          <div className="departments-grid">
            {data.departments.map((dept, index) => (
              <div key={index} className="department-card">
                <div className="dept-icon">{dept.icon}</div>
                <h3>{dept.name}</h3>
                <p>{dept.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="highlights-section">
          <h2>Faculty Highlights</h2>
          <div className="highlights-grid">
            {data.highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <p>{data.contact}</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default ArtsStaff;
