import React from 'react';
import '../styles/PolicyPages.css';

interface UPStateUniversitiesActProps {
  language: 'en' | 'hi';
  onBack: () => void;
  onHome?: () => void;
}

const UPStateUniversitiesAct: React.FC<UPStateUniversitiesActProps> = ({ language, onBack, onHome }) => {
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
          <h1>{language === 'en' ? 'UP State Universities Act' : 'यूपी राज्य विश्वविद्यालय अधिनियम'}</h1>
          <p>{language === 'en' ? 'Governing Framework for State Universities' : 'राज्य विश्वविद्यालयों के लिए शासन ढांचा'}</p>
        </div>

        <div className="policy-content">
          <section className="content-section">
            <h2>{language === 'en' ? 'Overview' : 'अवलोकन'}</h2>
            <p>{language === 'en' 
              ? 'The UP State Universities Act provides the legal framework for the establishment, governance, and functioning of state universities in Uttar Pradesh. It ensures quality education, accountability, and academic excellence across all state universities.'
              : 'यूपी राज्य विश्वविद्यालय अधिनियम उत्तर प्रदेश में राज्य विश्वविद्यालयों की स्थापना, शासन और कार्यप्रणाली के लिए कानूनी ढांचा प्रदान करता है। यह सभी राज्य विश्वविद्यालयों में गुणवत्तापूर्ण शिक्षा, जवाबदेही और शैक्षणिक उत्कृष्टता सुनिश्चित करता है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Key Provisions' : 'मुख्य प्रावधान'}</h2>
            <ul className="provisions-list">
              <li>{language === 'en' ? 'Establishment of Statutory Bodies' : 'सांविधिक निकायों की स्थापना'}</li>
              <li>{language === 'en' ? 'Academic Autonomy and Excellence' : 'शैक्षणिक स्वायत्तता और उत्कृष्टता'}</li>
              <li>{language === 'en' ? 'Curriculum Development and Quality Assurance' : 'पाठ्यक्रम विकास और गुणवत्ता आश्वासन'}</li>
              <li>{language === 'en' ? 'Student Rights and Responsibilities' : 'छात्र अधिकार और जिम्मेदारियां'}</li>
              <li>{language === 'en' ? 'Faculty Recruitment and Development' : 'संकाय भर्ती और विकास'}</li>
              <li>{language === 'en' ? 'Financial Management and Accountability' : 'वित्तीय प्रबंधन और जवाबदेही'}</li>
              <li>{language === 'en' ? 'Research and Innovation Promotion' : 'अनुसंधान और नवाचार प्रोत्साहन'}</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'University Governance' : 'विश्वविद्यालय शासन'}</h2>
            <p>{language === 'en' 
              ? 'The Act establishes a robust governance structure with the Vice-Chancellor as the Chief Executive, supported by the Academic Council, Executive Council, and other statutory bodies to ensure transparent and efficient management.'
              : 'अधिनियम कुलाधिपति को मुख्य कार्यकारी के रूप में स्थापित करके एक मजबूत शासन संरचना बनाता है, जिसे अकादमिक परिषद, कार्यकारी परिषद और अन्य सांविधिक निकायों द्वारा समर्थित किया जाता है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Academic Programs' : 'शैक्षणिक कार्यक्रम'}</h2>
            <p>{language === 'en' 
              ? 'State universities are authorized to offer diverse academic programs ranging from undergraduate to doctoral levels, including professional and vocational courses aligned with national and international standards.'
              : 'राज्य विश्वविद्यालयों को स्नातक से डॉक्टरल स्तर तक विविध शैक्षणिक कार्यक्रम प्रदान करने का अधिकार है, जिसमें राष्ट्रीय और अंतर्राष्ट्रीय मानदंडों के अनुरूप व्यावसायिक और व्यावहारिक पाठ्यक्रम शामिल हैं।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Quality Assurance' : 'गुणवत्ता आश्वासन'}</h2>
            <p>{language === 'en' 
              ? 'Universities must establish Quality Assurance Cell to monitor and improve educational standards, ensure compliance with regulatory requirements, and facilitate continuous academic improvement.'
              : 'विश्वविद्यालयों को शैक्षणिक मानकों की निगरानी और सुधार के लिए गुणवत्ता आश्वासन सेल स्थापित करना चाहिए, नियामक आवश्यकताओं का पालन सुनिश्चित करना चाहिए और निरंतर शैक्षणिक सुधार की सुविधा देनी चाहिए।'
            }</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UPStateUniversitiesAct;
