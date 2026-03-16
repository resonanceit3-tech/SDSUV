import React from 'react';
import '../styles/SecondaryPages.css';

interface ConferenceSeminarWorkshopPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const ConferenceSeminarWorkshopPage: React.FC<ConferenceSeminarWorkshopPageProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Conference/Seminar & Workshop',
      description: 'Sri Dev Suman Uttarakhand University regularly organizes conferences, seminars, and workshops to promote academic excellence, research collaboration, and professional development.',
      details: [
        'Hosts national and international conferences',
        'Organizes specialized seminars on emerging topics',
        'Conducts practical workshops for skill enhancement',
        'Brings together experts and practitioners from various fields',
        'Facilitates knowledge sharing and academic discourse',
        'Promotes interdisciplinary collaboration and innovation'
      ]
    },
    hi: {
      title: 'सम्मेलन/सेमिनार और कार्यशाला',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय नियमित रूप से शैक्षणिक उत्कृष्टता, अनुसंधान सहयोग और व्यावसायिक विकास को बढ़ावा देने के लिए सम्मेलन, सेमिनार और कार्यशाला आयोजित करता है।',
      details: [
        'राष्ट्रीय और अंतर्राष्ट्रीय सम्मेलनों की मेजबानी करता है',
        'उभरते विषयों पर विशेष सेमिनार आयोजित करता है',
        'कौशल वृद्धि के लिए व्यावहारिक कार्यशाला आयोजित करता है',
        'विभिन्न क्षेत्रों से विशेषज्ञों और प्रैक्टिशनरों को एक साथ लाता है',
        'ज्ञान साझाकरण और शैक्षणिक परिचर्चा की सुविधा प्रदान करता है',
        'अंतःविषयक सहयोग और नवाचार को बढ़ावा देता है'
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

export default ConferenceSeminarWorkshopPage;
