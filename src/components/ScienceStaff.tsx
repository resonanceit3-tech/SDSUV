import React from 'react';
import '../styles/ScienceStaff.css';

interface ScienceStaffProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const ScienceStaff: React.FC<ScienceStaffProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Science Faculty Staff',
      subtitle: 'Dedicated Educators and Researchers',
      description: 'Our Science Faculty comprises experienced educators and researchers committed to academic excellence and student development.',
      departments: [
        {
          name: 'Physics Department',
          icon: '⚛️',
          description: 'Advanced physics education with research facilities'
        },
        {
          name: 'Chemistry Department',
          icon: '🧪',
          description: 'Comprehensive chemistry programs and lab facilities'
        },
        {
          name: 'Biology Department',
          icon: '🔬',
          description: 'Modern biology education with practical training'
        },
        {
          name: 'Mathematics Department',
          icon: '📐',
          description: 'Rigorous mathematics curriculum and problem solving'
        },
        {
          name: 'Environmental Science',
          icon: '🌱',
          description: 'Sustainability and environmental research focus'
        },
        {
          name: 'Biotechnology',
          icon: '🧬',
          description: 'Cutting-edge biotechnology programs and labs'
        }
      ],
      highlights: [
        { title: 'Expert Faculty', description: 'Highly qualified professors with years of experience' },
        { title: 'Research Focus', description: 'Active research programs and publications' },
        { title: 'Modern Labs', description: 'State-of-the-art laboratory facilities' },
        { title: 'Student Support', description: 'Personalized mentoring and guidance programs' }
      ],
      contact: 'For more information about Science Faculty, please contact us'
    },
    hi: {
      title: 'विज्ञान संकाय कर्मचारी',
      subtitle: 'समर्पित शिक्षक और शोधकर्ता',
      description: 'हमारा विज्ञान संकाय अनुभवी शिक्षकों और शोधकर्ताओं से बना है जो शैक्षणिक उत्कृष्टता और छात्र विकास के लिए प्रतिबद्ध हैं।',
      departments: [
        {
          name: 'भौतिकी विभाग',
          icon: '⚛️',
          description: 'अनुसंधान सुविधाओं के साथ उन्नत भौतिकी शिक्षा'
        },
        {
          name: 'रसायन विभाग',
          icon: '🧪',
          description: 'व्यापक रसायन कार्यक्रम और प्रयोगशाला सुविधाएं'
        },
        {
          name: 'जीव विज्ञान विभाग',
          icon: '🔬',
          description: 'व्यावहारिक प्रशिक्षण के साथ आधुनिक जीव विज्ञान शिक्षा'
        },
        {
          name: 'गणित विभाग',
          icon: '📐',
          description: 'कठोर गणित पाठ्यक्रम और समस्या समाधान'
        },
        {
          name: 'पर्यावरण विज्ञान',
          icon: '🌱',
          description: 'स्थिरता और पर्यावरणीय अनुसंधान पर ध्यान'
        },
        {
          name: 'जैव प्रौद्योगिकी',
          icon: '🧬',
          description: 'अत्याधुनिक जैव प्रौद्योगिकी कार्यक्रम और प्रयोगशालाएं'
        }
      ],
      highlights: [
        { title: 'विशेषज्ञ संकाय', description: 'वर्षों के अनुभव के साथ उच्च योग्य प्रोफेसर' },
        { title: 'अनुसंधान फोकस', description: 'सक्रिय अनुसंधान कार्यक्रम और प्रकाशन' },
        { title: 'आधुनिक प्रयोगशालाएं', description: 'अत्याधुनिक प्रयोगशाला सुविधाएं' },
        { title: 'छात्र समर्थन', description: 'व्यक्तिगत मेंटरिंग और मार्गदर्शन कार्यक्रम' }
      ],
      contact: 'विज्ञान संकाय के बारे में अधिक जानकारी के लिए, कृपया हमसे संपर्क करें'
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

export default ScienceStaff;
