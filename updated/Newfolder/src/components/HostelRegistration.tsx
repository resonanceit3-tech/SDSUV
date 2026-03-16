import React from 'react';
import '../styles/HostelRegistration.css';

interface HostelRegistrationProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const HostelRegistration: React.FC<HostelRegistrationProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Hostel Registration',
      subtitle: 'Accommodation Services',
      description: 'Sri Dev Suman University provides comfortable and well-maintained hostel facilities for students. Complete your registration to secure your on-campus accommodation.',
      sections: [
        {
          title: 'Registration Portal',
          icon: '💻',
          description: 'Access the online hostel registration system to book your accommodation'
        },
        {
          title: 'Available Hostels',
          icon: '🏢',
          description: 'Explore various hostel options with different amenities and facilities'
        },
        {
          title: 'Room Allocation',
          icon: '🛏️',
          description: 'Fair allocation system based on merit and preference'
        },
        {
          title: 'Hostel Facilities',
          icon: '⭐',
          description: 'WiFi, mess, laundry, gym, and recreational facilities available'
        },
        {
          title: 'Fee Payment',
          icon: '💳',
          description: 'Online payment options for hostel fees with flexible payment plans'
        },
        {
          title: 'Support Services',
          icon: '📞',
          description: 'Resident mentors and support staff available 24/7'
        }
      ],
      cta: 'Register for Hostel'
    },
    hi: {
      title: 'छात्रावास पंजीकरण',
      subtitle: 'आवास सेवाएं',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय छात्रों के लिए आरामदायक और अच्छी तरह से रखरखाव की गई छात्रावास सुविधाएं प्रदान करता है। अपने आवास को सुरक्षित करने के लिए पंजीकरण पूरा करें।',
      sections: [
        {
          title: 'पंजीकरण पोर्टल',
          icon: '💻',
          description: 'आपके आवास को बुक करने के लिए ऑनलाइन छात्रावास पंजीकरण प्रणाली तक पहुंचें'
        },
        {
          title: 'उपलब्ध छात्रावास',
          icon: '🏢',
          description: 'विभिन्न सुविधाओं और सुविधाओं के साथ विभिन्न छात्रावास विकल्प देखें'
        },
        {
          title: 'कक्ष आवंटन',
          icon: '🛏️',
          description: 'योग्यता और प्राथमिकता के आधार पर निष्पक्ष आवंटन प्रणाली'
        },
        {
          title: 'छात्रावास सुविधाएं',
          icon: '⭐',
          description: 'वाईफाई, मेस, लॉन्ड्री, जिम और मनोरंजन सुविधाएं उपलब्ध'
        },
        {
          title: 'शुल्क भुगतान',
          icon: '💳',
          description: 'लचीली भुगतान योजनाओं के साथ छात्रावास शुल्क के लिए ऑनलाइन भुगतान विकल्प'
        },
        {
          title: 'समर्थन सेवाएं',
          icon: '📞',
          description: 'आवासीय सलाहकार और समर्थन कर्मचारी 24/7 उपलब्ध'
        }
      ],
      cta: 'छात्रावास के लिए पंजीकरण करें'
    }
  };

  const data = content[language];

  return (
    <div className="hostel-registration-page">
      <div className="hostel-registration-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="hostel-registration-subtitle">{data.subtitle}</p>
      </div>

      <div className="hostel-registration-container">
        <div className="hostel-registration-description">
          <p>{data.description}</p>
        </div>

        <div className="hostel-registration-sections-section">
          <div className="hostel-registration-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="hostel-registration-section-card">
                <div className="hostel-registration-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hostel-registration-cta-section">
          <button className="hostel-registration-submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default HostelRegistration;
