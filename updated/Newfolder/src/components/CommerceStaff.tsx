import React from 'react';
import '../styles/CommerceStaff.css';

interface CommerceStaffProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const CommerceStaff: React.FC<CommerceStaffProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Commerce Faculty Staff',
      subtitle: 'Building Future Business Leaders',
      description: 'Our Commerce Faculty combines theoretical knowledge with practical expertise to prepare students for global business opportunities.',
      departments: [
        {
          name: 'Accounting Department',
          icon: '📊',
          description: 'Financial accounting and auditing expertise'
        },
        {
          name: 'Economics Department',
          icon: '💹',
          description: 'Macro and microeconomic theories and applications'
        },
        {
          name: 'Business Studies',
          icon: '💼',
          description: 'Management and business administration'
        },
        {
          name: 'Finance Department',
          icon: '💰',
          description: 'Corporate finance and investment management'
        },
        {
          name: 'Marketing Department',
          icon: '🎯',
          description: 'Modern marketing strategies and consumer behavior'
        },
        {
          name: 'Law Department',
          icon: '⚖️',
          description: 'Commercial and corporate law studies'
        }
      ],
      highlights: [
        { title: 'Industry Connect', description: 'Strong partnerships with leading business organizations' },
        { title: 'Practical Training', description: 'Internship and real-world project opportunities' },
        { title: 'Career Growth', description: 'Excellent placement record and alumni network' },
        { title: 'Expert Faculty', description: 'Experienced professionals from industry and academia' }
      ],
      contact: 'For more information about Commerce Faculty, please contact us'
    },
    hi: {
      title: 'वाणिज्य संकाय कर्मचारी',
      subtitle: 'भविष्य के व्यावसायिक नेता बनाना',
      description: 'हमारा वाणिज्य संकाय सैद्धांतिक ज्ञान को व्यावहारिक विशेषज्ञता के साथ जोड़ता है ताकि छात्रों को वैश्विक व्यावसायिक अवसरों के लिए तैयार किया जा सके।',
      departments: [
        {
          name: 'लेखांकन विभाग',
          icon: '📊',
          description: 'वित्तीय लेखांकन और ऑडिटिंग विशेषज्ञता'
        },
        {
          name: 'अर्थशास्त्र विभाग',
          icon: '💹',
          description: 'मैक्रो और सूक्ष्म आर्थिक सिद्धांत और अनुप्रयोग'
        },
        {
          name: 'व्यावसायिक अध्ययन',
          icon: '💼',
          description: 'प्रबंधन और व्यावसायिक प्रशासन'
        },
        {
          name: 'वित्त विभाग',
          icon: '💰',
          description: 'कॉर्पोरेट वित्त और निवेश प्रबंधन'
        },
        {
          name: 'विपणन विभाग',
          icon: '🎯',
          description: 'आधुनिक विपणन रणनीतियां और उपभोक्ता व्यवहार'
        },
        {
          name: 'कानून विभाग',
          icon: '⚖️',
          description: 'व्यावसायिक और कॉर्पोरेट कानून अध्ययन'
        }
      ],
      highlights: [
        { title: 'उद्योग संपर्क', description: 'प्रमुख व्यावसायिक संगठनों के साथ मजबूत भागीदारी' },
        { title: 'व्यावहारिक प्रशिक्षण', description: 'इंटर्नशिप और वास्तविक दुनिया की परियोजनाओं के अवसर' },
        { title: 'कैरियर विकास', description: 'उत्कृष्ट प्लेसमेंट रिकॉर्ड और पूर्व छात्र नेटवर्क' },
        { title: 'विशेषज्ञ संकाय', description: 'उद्योग और शिक्षा जगत के अनुभवी पेशेवर' }
      ],
      contact: 'वाणिज्य संकाय के बारे में अधिक जानकारी के लिए, कृपया हमसे संपर्क करें'
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

export default CommerceStaff;
