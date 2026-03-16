import React from 'react';
import '../styles/AntiRagging.css';

interface AntiRaggingProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const AntiRagging: React.FC<AntiRaggingProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Anti Ragging',
      subtitle: 'Safe Campus Initiative',
      description: 'Sri Dev Suman University is committed to maintaining a safe and respectful campus environment. We have comprehensive anti-ragging policies and support systems in place.',
      sections: [
        {
          title: 'Anti-Ragging Policy',
          icon: '📋',
          description: 'Zero tolerance policy against any form of ragging, bullying, or harassment on campus'
        },
        {
          title: 'Complaint Mechanism',
          icon: '📞',
          description: 'Confidential channels for reporting incidents with trained support staff'
        },
        {
          title: 'Student Support',
          icon: '🤝',
          description: 'Counseling and mentoring programs for affected students'
        },
        {
          title: 'Action & Redressal',
          icon: '⚖️',
          description: 'Swift investigation and appropriate actions against violators'
        },
        {
          title: 'Awareness Programs',
          icon: '📢',
          description: 'Regular orientation and awareness sessions for students'
        },
        {
          title: 'Safe Community',
          icon: '🏫',
          description: 'Monitors and mentors ensure a safe, inclusive campus atmosphere'
        }
      ],
      cta: 'Report Incident'
    },
    hi: {
      title: 'रैगिंग विरोधी',
      subtitle: 'सुरक्षित परिसर पहल',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय एक सुरक्षित और सम्मानजनक परिसर वातावरण बनाए रखने के लिए प्रतिबद्ध है। हमारे पास व्यापक रैगिंग विरोधी नीतियां और समर्थन प्रणालियां हैं।',
      sections: [
        {
          title: 'रैगिंग विरोधी नीति',
          icon: '📋',
          description: 'परिसर में किसी भी प्रकार की रैगिंग, बदमाशी या उत्पीड़न के विरुद्ध शून्य सहिष्णुता नीति'
        },
        {
          title: 'शिकायत तंत्र',
          icon: '📞',
          description: 'प्रशिक्षित कर्मचारियों के साथ घटनाओं की रिपोर्टिंग के लिए गोपनीय चैनल'
        },
        {
          title: 'छात्र समर्थन',
          icon: '🤝',
          description: 'प्रभावित छात्रों के लिए परामर्श और सलाह कार्यक्रम'
        },
        {
          title: 'कार्रवाई और निवारण',
          icon: '⚖️',
          description: 'उल्लंघनकारियों के विरुद्ध तेजी से जांच और उचित कार्रवाई'
        },
        {
          title: 'जागरूकता कार्यक्रम',
          icon: '📢',
          description: 'छात्रों के लिए नियमित अभिविन्यास और जागरूकता सत्र'
        },
        {
          title: 'सुरक्षित समुदाय',
          icon: '🏫',
          description: 'मॉनिटर और सलाहकार एक सुरक्षित, समावेशी परिसर वातावरण सुनिश्चित करते हैं'
        }
      ],
      cta: 'घटना की रिपोर्ट करें'
    }
  };

  const data = content[language];

  return (
    <div className="anti-ragging-page">
      <div className="anti-ragging-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="anti-ragging-subtitle">{data.subtitle}</p>
      </div>

      <div className="anti-ragging-container">
        <div className="anti-ragging-description">
          <p>{data.description}</p>
        </div>

        <div className="anti-ragging-sections-section">
          <div className="anti-ragging-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="anti-ragging-section-card">
                <div className="anti-ragging-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="anti-ragging-cta-section">
          <button className="anti-ragging-submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default AntiRagging;
