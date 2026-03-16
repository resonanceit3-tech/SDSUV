import React from 'react';
import '../styles/PolicyPages.css';

interface ITPolicyProps {
  language: 'en' | 'hi';
  onBack: () => void;
  onHome?: () => void;
}

const ITPolicy: React.FC<ITPolicyProps> = ({ language, onBack, onHome }) => {
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
          <h1>{language === 'en' ? 'IT Policy 2022' : 'आईटी नीति 2022'}</h1>
          <p>{language === 'en' ? 'Digital Transformation and Technology Integration' : 'डिजिटल परिवर्तन और प्रौद्योगिकी एकीकरण'}</p>
        </div>

        <div className="policy-content">
          <section className="content-section">
            <h2>{language === 'en' ? 'Policy Objectives' : 'नीति उद्देश्य'}</h2>
            <p>{language === 'en' 
              ? 'The IT Policy 2022 aims to leverage digital technology for improved academic delivery, administrative efficiency, and institutional governance while ensuring data security and cyber safety.'
              : 'आईटी नीति 2022 का उद्देश्य बेहतर शैक्षणिक वितरण, प्रशासनिक दक्षता और संस्थागत शासन के लिए डिजिटल प्रौद्योगिकी का लाभ उठाना है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Key Areas' : 'मुख्य क्षेत्र'}</h2>
            <ul className="provisions-list">
              <li>{language === 'en' ? 'Digital Learning Infrastructure' : 'डिजिटल सीखने की बुनियादी ढांचा'}</li>
              <li>{language === 'en' ? 'Cloud Computing and Data Centers' : 'क्लाउड कंप्यूटिंग और डेटा केंद्र'}</li>
              <li>{language === 'en' ? 'Cybersecurity Framework' : 'साइबर सुरक्षा ढांचा'}</li>
              <li>{language === 'en' ? 'Administrative Management Systems' : 'प्रशासनिक प्रबंधन प्रणाली'}</li>
              <li>{language === 'en' ? 'Open Source Software Adoption' : 'ओपन सोर्स सॉफ्टवेयर अपनाना'}</li>
              <li>{language === 'en' ? 'Mobile Application Development' : 'मोबाइल एप्लिकेशन विकास'}</li>
              <li>{language === 'en' ? 'IT Governance and Compliance' : 'आईटी शासन और अनुपालन'}</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Digital Learning' : 'डिजिटल सीखना'}</h2>
            <p>{language === 'en' 
              ? 'The policy promotes blended and online learning using Learning Management Systems (LMS), digital content repositories, and interactive educational technology to enhance student engagement and learning outcomes.'
              : 'यह नीति सीखने वाली प्रबंधन प्रणाली (LMS) का उपयोग करके मिश्रित और ऑनलाइन सीखने को बढ़ावा देती है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Data Security and Privacy' : 'डेटा सुरक्षा और गोपनीयता'}</h2>
            <p>{language === 'en' 
              ? 'Strong emphasis on data protection, encryption, access control, and privacy compliance. Regular security audits and cyber awareness training for staff and students ensure robust protection of university data.'
              : 'डेटा सुरक्षा, एन्क्रिप्शन, पहुंच नियंत्रण और गोपनीयता अनुपालन पर जोर दिया गया है। नियमित सुरक्षा ऑडिट विश्वविद्यालय डेटा की मजबूत सुरक्षा सुनिश्चित करते हैं।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Capacity Building' : 'क्षमता निर्माण'}</h2>
            <p>{language === 'en' 
              ? 'Regular IT training programs, workshops, and professional development initiatives for faculty and staff to enhance digital literacy and effective utilization of technology in academic and administrative processes.'
              : 'संकाय और कर्मचारियों के लिए नियमित आईटी प्रशिक्षण कार्यक्रम और व्यावसायिक विकास पहल डिजिटल साक्षरता बढ़ाने के लिए।'
            }</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ITPolicy;
