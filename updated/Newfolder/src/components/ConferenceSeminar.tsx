import React from 'react';
import '../styles/ConferenceSeminar.css';

interface ConferenceSeminarProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const ConferenceSeminar: React.FC<ConferenceSeminarProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Conference/Seminar & Workshop',
      subtitle: 'Academic & Professional Development',
      description: 'Sri Dev Suman Uttarakhand University regularly organizes conferences, seminars, and workshops to promote academic excellence and professional development.',
      categories: [
        {
          name: 'National Conferences',
          icon: '🌐',
          count: '15+ Events',
          description: 'National level academic conferences'
        },
        {
          name: 'International Seminars',
          icon: '🌍',
          count: '10+ Events',
          description: 'International seminars and forums'
        },
        {
          name: 'Faculty Workshops',
          icon: '👨‍🏫',
          count: '25+ Events',
          description: 'Professional development workshops'
        },
        {
          name: 'Student Seminars',
          icon: '👨‍🎓',
          count: '30+ Events',
          description: 'Seminars for student development'
        },
        {
          name: 'Industry Interactions',
          icon: '💼',
          count: '20+ Events',
          description: 'Interactions with industry professionals'
        },
        {
          name: 'Research Colloquia',
          icon: '🔍',
          count: '18+ Events',
          description: 'Research focused discussion forums'
        }
      ],
      contact: 'Participate in our events and conferences'
    },
    hi: {
      title: 'सम्मेलन/सेमिनार और कार्यशाला',
      subtitle: 'शैक्षणिक और व्यावसायिक विकास',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय नियमित रूप से शैक्षणिक उत्कृष्टता और व्यावसायिक विकास को बढ़ावा देने के लिए सम्मेलन, सेमिनार और कार्यशालाएं आयोजित करता है।',
      categories: [
        {
          name: 'राष्ट्रीय सम्मेलन',
          icon: '🌐',
          count: '15+ कार्यक्रम',
          description: 'राष्ट्रीय स्तरीय शैक्षणिक सम्मेलन'
        },
        {
          name: 'अंतर्राष्ट्रीय सेमिनार',
          icon: '🌍',
          count: '10+ कार्यक्रम',
          description: 'अंतर्राष्ट्रीय सेमिनार और मंच'
        },
        {
          name: 'संकाय कार्यशालाएं',
          icon: '👨‍🏫',
          count: '25+ कार्यक्रम',
          description: 'व्यावसायिक विकास कार्यशालाएं'
        },
        {
          name: 'छात्र सेमिनार',
          icon: '👨‍🎓',
          count: '30+ कार्यक्रम',
          description: 'छात्र विकास के लिए सेमिनार'
        },
        {
          name: 'उद्योग संपर्क',
          icon: '💼',
          count: '20+ कार्यक्रम',
          description: 'उद्योग पेशेवरों के साथ बातचीत'
        },
        {
          name: 'अनुसंधान कोलोक्विया',
          icon: '🔍',
          count: '18+ कार्यक्रम',
          description: 'अनुसंधान केंद्रित चर्चा मंच'
        }
      ],
      contact: 'हमारे कार्यक्रमों और सम्मेलनों में भाग लें'
    }
  };

  const data = content[language];

  return (
    <div className="conference-page">
      <div className="conference-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="conference-subtitle">{data.subtitle}</p>
      </div>

      <div className="conference-container">
        <div className="conference-description">
          <p>{data.description}</p>
        </div>

        <div className="conference-section">
          <h2>Event Categories</h2>
          <div className="conference-grid">
            {data.categories.map((category, index) => (
              <div key={index} className="conference-card">
                <div className="conference-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p className="count">{category.count}</p>
                <p className="description">{category.description}</p>
                <button className="register-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceSeminar;
