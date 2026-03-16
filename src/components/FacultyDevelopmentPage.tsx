import React from 'react';
import '../styles/SecondaryPages.css';

interface FacultyDevelopmentPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const FacultyDevelopmentPage: React.FC<FacultyDevelopmentPageProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Faculty Development Centre',
      description: 'The Faculty Development Centre at Sri Dev Suman Uttarakhand University is dedicated to enhancing the professional competencies and teaching effectiveness of faculty members.',
      details: [
        'Offers professional development programs and workshops',
        'Provides training in modern teaching methodologies',
        'Supports curriculum development and course design',
        'Facilitates international faculty exchange programs',
        'Promotes research collaborations and publications',
        'Organizes seminars on academic excellence and innovation'
      ]
    },
    hi: {
      title: 'संकाय विकास केंद्र',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय में संकाय विकास केंद्र संकाय सदस्यों की व्यावसायिक योग्यताओं और शिक्षण प्रभावशीलता को बढ़ाने के लिए समर्पित है।',
      details: [
        'व्यावसायिक विकास कार्यक्रम और कार्यशाला प्रदान करता है',
        'आधुनिक शिक्षण पद्धतियों में प्रशिक्षण प्रदान करता है',
        'पाठ्यक्रम विकास और पाठ्यक्रम डिजाइन का समर्थन करता है',
        'अंतर्राष्ट्रीय संकाय विनिमय कार्यक्रमों की सुविधा प्रदान करता है',
        'अनुसंधान सहयोग और प्रकाशनों को बढ़ावा देता है',
        'शैक्षणिक उत्कृष्टता और नवाचार पर सेमिनार आयोजित करता है'
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

export default FacultyDevelopmentPage;
