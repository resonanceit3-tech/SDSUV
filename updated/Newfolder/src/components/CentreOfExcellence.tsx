import React from 'react';
import '../styles/CentreOfExcellence.css';

interface CentreOfExcellenceProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const CentreOfExcellence: React.FC<CentreOfExcellenceProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Centre of Excellence',
      subtitle: 'Innovation & Advanced Research',
      description: 'Our Centre of Excellence is dedicated to promoting innovation, advanced research, and world-class academic programs.',
      categories: [
        {
          name: 'Research Labs',
          icon: '🧪',
          count: '8 Labs',
          description: 'State-of-the-art research laboratories'
        },
        {
          name: 'Innovation Hub',
          icon: '💡',
          count: '5 Centers',
          description: 'Innovation and entrepreneurship centers'
        },
        {
          name: 'Advanced Training',
          icon: '🎯',
          count: '12+ Programs',
          description: 'Advanced skill development programs'
        },
        {
          name: 'Industry Partnerships',
          icon: '🤝',
          count: '20+ Partners',
          description: 'Collaborations with leading industries'
        },
        {
          name: 'Research Publications',
          icon: '📊',
          count: '150+ Papers',
          description: 'Published research in peer-reviewed journals'
        },
        {
          name: 'Faculty Network',
          icon: '👨‍💼',
          count: '50+ Members',
          description: 'Network of expert researchers and faculty'
        }
      ],
      contact: 'Explore our centres of excellence'
    },
    hi: {
      title: 'उत्कृष्टता केंद्र',
      subtitle: 'नवाचार और उन्नत अनुसंधान',
      description: 'हमारा उत्कृष्टता केंद्र नवाचार, उन्नत अनुसंधान और विश्व-स्तरीय शैक्षणिक कार्यक्रमों को बढ़ावा देने के लिए समर्पित है।',
      categories: [
        {
          name: 'अनुसंधान प्रयोगशालाएं',
          icon: '🧪',
          count: '8 प्रयोगशालाएं',
          description: 'अत्याधुनिक अनुसंधान प्रयोगशालाएं'
        },
        {
          name: 'नवाचार हब',
          icon: '💡',
          count: '5 केंद्र',
          description: 'नवाचार और उद्यमिता केंद्र'
        },
        {
          name: 'उन्नत प्रशिक्षण',
          icon: '🎯',
          count: '12+ कार्यक्रम',
          description: 'उन्नत कौशल विकास कार्यक्रम'
        },
        {
          name: 'उद्योग साझेदारियां',
          icon: '🤝',
          count: '20+ साथी',
          description: 'प्रमुख उद्योगों के साथ सहयोग'
        },
        {
          name: 'अनुसंधान प्रकाशन',
          icon: '📊',
          count: '150+ पत्र',
          description: 'सहकर्मी-समीक्षा पत्रिकाओं में प्रकाशित अनुसंधान'
        },
        {
          name: 'संकाय नेटवर्क',
          icon: '👨‍💼',
          count: '50+ सदस्य',
          description: 'विशेषज्ञ शोधकर्ताओं और संकाय का नेटवर्क'
        }
      ],
      contact: 'हमारे उत्कृष्टता केंद्रों का अन्वेषण करें'
    }
  };

  const data = content[language];

  return (
    <div className="excellence-page">
      <div className="excellence-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="excellence-subtitle">{data.subtitle}</p>
      </div>

      <div className="excellence-container">
        <div className="excellence-description">
          <p>{data.description}</p>
        </div>

        <div className="excellence-section">
          <h2>Our Facilities & Programs</h2>
          <div className="excellence-grid">
            {data.categories.map((category, index) => (
              <div key={index} className="excellence-card">
                <div className="excellence-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p className="count">{category.count}</p>
                <p className="description">{category.description}</p>
                <button className="explore-btn">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentreOfExcellence;
