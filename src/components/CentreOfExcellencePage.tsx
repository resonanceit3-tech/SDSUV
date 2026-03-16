import React from 'react';
import '../styles/SecondaryPages.css';

interface CentreOfExcellencePageProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const CentreOfExcellencePage: React.FC<CentreOfExcellencePageProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Center of Excellence in Entrepreneurship and Incubation',
      description: 'The Center of Excellence in Entrepreneurship and Incubation at Sri Dev Suman Uttarakhand University is dedicated to fostering innovation, entrepreneurial spirit, and startup ecosystems among students and faculty.',
      details: [
        'Provides mentorship and guidance to aspiring entrepreneurs',
        'Offers incubation support for startup ideas',
        'Conducts workshops and training programs for skill development',
        'Facilitates networking with industry experts and investors',
        'Provides funding and financial assistance for startups',
        'Supports research and technology commercialization'
      ]
    },
    hi: {
      title: 'उद्यमिता और इनक्यूबेशन में उत्कृष्टता केंद्र',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय में उद्यमिता और इनक्यूबेशन में उत्कृष्टता केंद्र छात्रों और संकायों में नवाचार, उद्यमी भावना और स्टार्टअप पारिस्थितिक तंत्र को बढ़ावा देने के लिए समर्पित है।',
      details: [
        'आकांक्षी उद्यमियों को सलाह और मार्गदर्शन प्रदान करता है',
        'स्टार्टअप विचारों के लिए इनक्यूबेशन समर्थन प्रदान करता है',
        'कौशल विकास के लिए कार्यशाला और प्रशिक्षण कार्यक्रम आयोजित करता है',
        'उद्योग विशेषज्ञों और निवेशकों के साथ नेटवर्किंग की सुविधा प्रदान करता है',
        'स्टार्टअप के लिए वित्तपोषण और वित्तीय सहायता प्रदान करता है',
        'अनुसंधान और प्रौद्योगिकी व्यावसायीकरण का समर्थन करता है'
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

export default CentreOfExcellencePage;
