import React from 'react';
import '../styles/PolicyPages.css';

interface IQACPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
  onHome?: () => void;
}

const IQACPage: React.FC<IQACPageProps> = ({ language, onBack, onHome }) => {
  return (
    <div className="policy-page">
      <div className="navigation-buttons">
        <button className="back-button" onClick={onBack}>
          ← {language === 'en' ? 'Back' : 'पीछे'}
        </button>
        <button className="home-button" onClick={onHome || onBack}>
          🏠 {language === 'en' ? 'Home' : 'होम'}
        </button>
      </div>

      <div className="policy-container">
        <div className="policy-header">
          <h1>{language === 'en' ? 'Internal Quality Assurance Cell' : 'आंतरिक गुणवत्ता आश्वासन सेल'}</h1>
          <p>{language === 'en' ? 'Ensuring Academic Excellence and Continuous Improvement' : 'शैक्षणिक उत्कृष्टता और निरंतर सुधार सुनिश्चित करना'}</p>
        </div>

        <div className="policy-content">
          <section className="content-section">
            <h2>{language === 'en' ? 'Mission' : 'मिशन'}</h2>
            <p>{language === 'en' 
              ? 'The Internal Quality Assurance Cell (IQAC) is committed to ensuring academic quality and institutional excellence by monitoring, evaluating, and facilitating continuous improvement in all academic and administrative functions.'
              : 'आंतरिक गुणवत्ता आश्वासन सेल (IQAC) सभी शैक्षणिक और प्रशासनिक कार्यों में निगरानी, मूल्यांकन और निरंतर सुधार की सुविधा देकर शैक्षणिक गुणवत्ता और संस्थागत उत्कृष्टता सुनिश्चित करने के लिए प्रतिबद्ध है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Key Functions' : 'मुख्य कार्य'}</h2>
            <ul className="provisions-list">
              <li>{language === 'en' ? 'Development of quality benchmarks and standards' : 'गुणवत्ता मानकों और मानदंडों का विकास'}</li>
              <li>{language === 'en' ? 'Monitoring of teaching-learning processes' : 'शिक्षण-अधिगम प्रक्रियाओं की निगरानी'}</li>
              <li>{language === 'en' ? 'Student feedback collection and analysis' : 'छात्र प्रतिक्रिया संग्रह और विश्लेषण'}</li>
              <li>{language === 'en' ? 'Faculty development programs' : 'संकाय विकास कार्यक्रम'}</li>
              <li>{language === 'en' ? 'Research and innovation promotion' : 'अनुसंधान और नवाचार प्रोत्साहन'}</li>
              <li>{language === 'en' ? 'Infrastructure assessment and improvement' : 'बुनियादी ढांचे का आकलन और सुधार'}</li>
              <li>{language === 'en' ? 'Compliance monitoring with accreditation standards' : 'मान्यता मानकों के साथ अनुपालन निगरानी'}</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Quality Indicators' : 'गुणवत्ता संकेतक'}</h2>
            <p>{language === 'en' 
              ? 'IQAC monitors various quality indicators including curriculum design, teaching methodology, student engagement, assessment methods, faculty qualifications, and institutional infrastructure.'
              : 'IQAC पाठ्यक्रम डिजाइन, शिक्षण पद्धति, छात्र जुड़ाव, मूल्यांकन विधियों, संकाय योग्यता और संस्थागत बुनियादी ढांचे सहित विभिन्न गुणवत्ता संकेतकों की निगरानी करता है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Accreditation and Assessment' : 'मान्यता और मूल्यांकन'}</h2>
            <p>{language === 'en' 
              ? 'IQAC facilitates the university\'s accreditation process with NAAC (National Assessment and Accreditation Council) and conducts internal assessments to ensure compliance with national and international quality standards.'
              : 'IQAC विश्वविद्यालय की NAAC (राष्ट्रीय मूल्यांकन और मान्यता परिषद) के साथ मान्यता प्रक्रिया की सुविधा देता है और राष्ट्रीय और अंतर्राष्ट्रीय गुणवत्ता मानकों के अनुपालन को सुनिश्चित करने के लिए आंतरिक मूल्यांकन करता है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Stakeholder Engagement' : 'हितधारक जुड़ाव'}</h2>
            <p>{language === 'en' 
              ? 'IQAC involves students, faculty, parents, and employers in quality assurance initiatives through feedback mechanisms, surveys, and stakeholder committees to ensure comprehensive institutional improvement.'
              : 'IQAC प्रतिक्रिया तंत्र, सर्वेक्षण और हितधारक समितियों के माध्यम से गुणवत्ता आश्वासन पहल में छात्रों, संकाय, माता-पिता और नियोक्ताओं को शामिल करता है।'
            }</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IQACPage;
