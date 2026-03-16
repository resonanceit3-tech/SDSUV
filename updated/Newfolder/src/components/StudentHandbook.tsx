import React from 'react';
import '../styles/StudentHandbook.css';

interface StudentHandbookProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const StudentHandbook: React.FC<StudentHandbookProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Student Handbook',
      subtitle: 'Complete Guide & Policies',
      description: 'The Student Handbook provides comprehensive information about university policies, rules, regulations, and guidelines for all students.',
      sections: [
        {
          title: 'Academic Policies',
          icon: '📚',
          description: 'Course registration, attendance, grading, and academic integrity policies'
        },
        {
          title: 'Conduct & Discipline',
          icon: '⚖️',
          description: 'Code of conduct, disciplinary procedures, and behavioral expectations'
        },
        {
          title: 'Campus Rules',
          icon: '📋',
          description: 'Library access, hostel rules, facility usage, and campus safety guidelines'
        },
        {
          title: 'Student Services',
          icon: '🛠️',
          description: 'Information on counseling, health services, scholarships, and financial aid'
        },
        {
          title: 'Rights & Responsibilities',
          icon: '⚡',
          description: 'Student rights, grievance procedures, and their responsibilities'
        },
        {
          title: 'Important Contacts',
          icon: '📞',
          description: 'Directory of departments, offices, emergency contacts, and helplines'
        }
      ],
      cta: 'Download Handbook'
    },
    hi: {
      title: 'छात्र पुस्तिका',
      subtitle: 'संपूर्ण गाइड और नीतियां',
      description: 'छात्र पुस्तिका सभी छात्रों के लिए विश्वविद्यालय की नीतियों, नियमों, विनियमों और दिशानिर्देशों के बारे में व्यापक जानकारी प्रदान करती है।',
      sections: [
        {
          title: 'शैक्षणिक नीतियां',
          icon: '📚',
          description: 'पाठ्यक्रम पंजीकरण, उपस्थिति, श्रेणीकरण और शैक्षणिक अखंडता नीतियां'
        },
        {
          title: 'आचरण और अनुशासन',
          icon: '⚖️',
          description: 'आचरण संहिता, अनुशासनात्मक प्रक्रियाएं और आचरण संबंधी अपेक्षाएं'
        },
        {
          title: 'परिसर नियम',
          icon: '📋',
          description: 'पुस्तकालय पहुंच, छात्रावास नियम, सुविधा उपयोग और परिसर सुरक्षा दिशानिर्देश'
        },
        {
          title: 'छात्र सेवाएं',
          icon: '🛠️',
          description: 'परामर्श, स्वास्थ्य सेवाएं, छात्रवृत्ति और वित्तीय सहायता पर जानकारी'
        },
        {
          title: 'अधिकार और जिम्मेदारियां',
          icon: '⚡',
          description: 'छात्र अधिकार, शिकायत प्रक्रियाएं और उनकी जिम्मेदारियां'
        },
        {
          title: 'महत्वपूर्ण संपर्क',
          icon: '📞',
          description: 'विभागों की निर्देशिका, कार्यालय, आपातकालीन संपर्क और हेल्पलाइन'
        }
      ],
      cta: 'पुस्तिका डाउनलोड करें'
    }
  };

  const data = content[language];

  return (
    <div className="student-handbook-page">
      <div className="student-handbook-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="student-handbook-subtitle">{data.subtitle}</p>
      </div>

      <div className="student-handbook-container">
        <div className="student-handbook-description">
          <p>{data.description}</p>
        </div>

        <div className="student-handbook-sections-section">
          <div className="student-handbook-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="student-handbook-section-card">
                <div className="student-handbook-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="student-handbook-cta-section">
          <button className="student-handbook-submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default StudentHandbook;
