import React from 'react';
import '../styles/StudentFeedbackForm.css';

interface StudentFeedbackFormProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const StudentFeedbackForm: React.FC<StudentFeedbackFormProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Student Feedback Form',
      subtitle: 'Your Opinion Matters',
      description: 'Help us improve by sharing your valuable feedback about academics, campus facilities, and overall university experience.',
      sections: [
        {
          title: 'Course Feedback',
          icon: '📖',
          description: 'Share your opinions on course content, faculty, teaching methods, and materials'
        },
        {
          title: 'Faculty Rating',
          icon: '👨‍🏫',
          description: 'Rate faculty members on their teaching quality, availability, and support'
        },
        {
          title: 'Infrastructure',
          icon: '🏗️',
          description: 'Provide feedback on classroom facilities, laboratories, and campus infrastructure'
        },
        {
          title: 'Services',
          icon: '🔧',
          description: 'Comment on library services, IT support, hostel facilities, and other services'
        },
        {
          title: 'Suggestions',
          icon: '💡',
          description: 'Share your valuable suggestions for academic and overall improvements'
        },
        {
          title: 'Anonymous Submission',
          icon: '🔐',
          description: 'Option to submit feedback anonymously for complete confidentiality'
        }
      ],
      cta: 'Submit Feedback'
    },
    hi: {
      title: 'छात्र प्रतिक्रिया फॉर्म',
      subtitle: 'आपकी राय महत्वपूर्ण है',
      description: 'शिक्षाविदों, परिसर सुविधाओं और समग्र विश्वविद्यालय अनुभव के बारे में अपनी मूल्यवान प्रतिक्रिया साझा करके हमें सुधार करने में मदद करें।',
      sections: [
        {
          title: 'पाठ्यक्रम प्रतिक्रिया',
          icon: '📖',
          description: 'पाठ्यक्रम सामग्री, संकाय, शिक्षण विधियों और सामग्री पर अपनी राय साझा करें'
        },
        {
          title: 'संकाय रेटिंग',
          icon: '👨‍🏫',
          description: 'संकाय सदस्यों को उनकी शिक्षण गुणवत्ता, उपलब्धता और समर्थन पर दर दें'
        },
        {
          title: 'बुनियादी ढांचा',
          icon: '🏗️',
          description: 'कक्षा सुविधाओं, प्रयोगशालाओं और परिसर बुनियादी ढांचे पर प्रतिक्रिया प्रदान करें'
        },
        {
          title: 'सेवाएं',
          icon: '🔧',
          description: 'पुस्तकालय सेवाओं, आईटी समर्थन, छात्रावास सुविधाओं और अन्य सेवाओं पर टिप्पणी करें'
        },
        {
          title: 'सुझाव',
          icon: '💡',
          description: 'शैक्षणिक और समग्र सुधार के लिए अपने मूल्यवान सुझाव साझा करें'
        },
        {
          title: 'गुमनाम प्रस्तुति',
          icon: '🔐',
          description: 'पूर्ण गोपनीयता के लिए गुमनाम रूप से प्रतिक्रिया जमा करने का विकल्प'
        }
      ],
      cta: 'प्रतिक्रिया जमा करें'
    }
  };

  const data = content[language];

  return (
    <div className="student-feedback-form-page">
      <div className="student-feedback-form-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="student-feedback-form-subtitle">{data.subtitle}</p>
      </div>

      <div className="student-feedback-form-container">
        <div className="student-feedback-form-description">
          <p>{data.description}</p>
        </div>

        <div className="student-feedback-form-sections-section">
          <div className="student-feedback-form-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="student-feedback-form-section-card">
                <div className="student-feedback-form-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="student-feedback-form-cta-section">
          <button className="student-feedback-form-submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedbackForm;
