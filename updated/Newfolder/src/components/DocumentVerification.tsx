import React from 'react';
import '../styles/DocumentVerification.css';

interface DocumentVerificationProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const DocumentVerification: React.FC<DocumentVerificationProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Document Verification',
      subtitle: 'Official Document Processing',
      description: 'Manage and verify your academic documents with our efficient document verification system. Get instant certified copies and transcripts.',
      sections: [
        {
          title: 'Document Submission',
          icon: '📤',
          description: 'Submit your documents for official verification and authentication'
        },
        {
          title: 'Certificate Issuance',
          icon: '🎓',
          description: 'Apply for official degree certificates and course completion certificates'
        },
        {
          title: 'Transcript Request',
          icon: '📄',
          description: 'Request official academic transcripts and mark sheets'
        },
        {
          title: 'Verification Status',
          icon: '✓',
          description: 'Track status of your document verification applications in real-time'
        },
        {
          title: 'Digital Credentials',
          icon: '💳',
          description: 'Access your digital badges and electronic certificates'
        },
        {
          title: 'Support Services',
          icon: '🔧',
          description: 'Assistance with document processing and verification inquiries'
        }
      ],
      cta: 'Submit Documents'
    },
    hi: {
      title: 'दस्तावेज़ सत्यापन',
      subtitle: 'आधिकारिक दस्तावेज़ प्रसंस्करण',
      description: 'हमारी कुशल दस्तावेज़ सत्यापन प्रणाली के साथ अपने शैक्षणिक दस्तावेज़ों को प्रबंधित और सत्यापित करें। तुरंत प्रमाणित प्रतियां और प्रतिलेख प्राप्त करें।',
      sections: [
        {
          title: 'दस्तावेज़ जमा करना',
          icon: '📤',
          description: 'आधिकारिक सत्यापन और प्रमाणीकरण के लिए अपने दस्तावेज़ जमा करें'
        },
        {
          title: 'प्रमाण पत्र जारी करना',
          icon: '🎓',
          description: 'आधिकारिक डिग्री प्रमाण पत्र और पाठ्यक्रम पूर्ण प्रमाण पत्र के लिए आवेदन करें'
        },
        {
          title: 'प्रतिलेख अनुरोध',
          icon: '📄',
          description: 'आधिकारिक शैक्षणिक प्रतिलेख और मार्क शीट का अनुरोध करें'
        },
        {
          title: 'सत्यापन स्थिति',
          icon: '✓',
          description: 'रीयल-टाइम में अपने दस्तावेज़ सत्यापन आवेदनों की स्थिति ट्रैक करें'
        },
        {
          title: 'डिजिटल क्रेडेंशियल्स',
          icon: '💳',
          description: 'अपने डिजिटल बैज और इलेक्ट्रॉनिक प्रमाण पत्र तक पहुंचें'
        },
        {
          title: 'समर्थन सेवाएं',
          icon: '🔧',
          description: 'दस्तावेज़ प्रसंस्करण और सत्यापन पूछताछ में सहायता'
        }
      ],
      cta: 'दस्तावेज़ जमा करें'
    }
  };

  const data = content[language];

  return (
    <div className="document-verification-page">
      <div className="document-verification-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="document-verification-subtitle">{data.subtitle}</p>
      </div>

      <div className="document-verification-container">
        <div className="document-verification-description">
          <p>{data.description}</p>
        </div>

        <div className="document-verification-sections-section">
          <div className="document-verification-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="document-verification-section-card">
                <div className="document-verification-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="document-verification-cta-section">
          <button className="document-verification-submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default DocumentVerification;
