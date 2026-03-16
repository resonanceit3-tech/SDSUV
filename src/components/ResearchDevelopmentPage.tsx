import React from 'react';
import '../styles/SecondaryPages.css';

interface ResearchDevelopmentPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const ResearchDevelopmentPage: React.FC<ResearchDevelopmentPageProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Research and Development',
      description: 'The Research and Development department at Sri Dev Suman Uttarakhand University is committed to advancing knowledge through innovative research initiatives and collaborative projects.',
      details: [
        'Promotes interdisciplinary research across multiple fields',
        'Facilitates collaboration with national and international institutions',
        'Supports research grants and funding opportunities',
        'Publishes research in peer-reviewed journals',
        'Organizes research seminars and conferences',
        'Encourages faculty mentorship and research excellence'
      ]
    },
    hi: {
      title: 'अनुसंधान और विकास',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय में अनुसंधान और विकास विभाग नवीन अनुसंधान पहलों और सहयोगी परियोजनाओं के माध्यम से ज्ञान को आगे बढ़ाने के लिए प्रतिबद्ध है।',
      details: [
        'कई क्षेत्रों में अंतःविषयक अनुसंधान को बढ़ावा देता है',
        'राष्ट्रीय और अंतर्राष्ट्रीय संस्थानों के साथ सहयोग की सुविधा प्रदान करता है',
        'अनुसंधान अनुदान और वित्तपोषण के अवसरों का समर्थन करता है',
        'सहकर्मी-समीक्षा की गई पत्रिकाओं में अनुसंधान प्रकाशित करता है',
        'अनुसंधान सेमिनार और सम्मेलन आयोजित करता है',
        'संकाय सलाह और अनुसंधान उत्कृष्टता को प्रोत्साहित करता है'
      ]
    }
  };

  const data = content[language];

  return (
    <div className="secondary-page">
      <div className="secondary-header">
        <button className="back-btn" onClick={onBack}>← {language === 'en' ? 'Back' : 'पीछे'}</button>
        <h1>{data.title}</h1>
      </div>

      <div className="secondary-container">
        <div className="secondary-description">
          <p>{data.description}</p>
        </div>

        <div className="secondary-details">
          <h2>{language === 'en' ? 'Key Highlights' : 'मुख्य विशेषताएं'}</h2>
          <ul className="details-list">
            {data.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResearchDevelopmentPage;
