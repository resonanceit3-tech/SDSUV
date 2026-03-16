import React from 'react';
import '../styles/PolicyPages.css';

interface IPRPolicyProps {
  language: 'en' | 'hi';
  onBack: () => void;
  onHome?: () => void;
}

const IPRPolicy: React.FC<IPRPolicyProps> = ({ language, onBack, onHome }) => {
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
          <h1>{language === 'en' ? 'IPR Policy 2022' : 'बौद्धिक संपत्ति अधिकार नीति 2022'}</h1>
          <p>{language === 'en' ? 'Protection and Management of Intellectual Property' : 'बौद्धिक संपत्ति की सुरक्षा और प्रबंधन'}</p>
        </div>

        <div className="policy-content">
          <section className="content-section">
            <h2>{language === 'en' ? 'Purpose' : 'उद्देश्य'}</h2>
            <p>{language === 'en' 
              ? 'The IPR Policy 2022 is designed to foster innovation, protect intellectual property rights, and ensure fair ownership and benefit-sharing of innovations created by faculty, researchers, and students.'
              : 'बौद्धिक संपत्ति अधिकार नीति 2022 नवाचार को प्रोत्साहित करने, बौद्धिक संपत्ति अधिकारों की सुरक्षा, और न्यायसंगत स्वामित्व सुनिश्चित करने के लिए डिजाइन की गई है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Types of IP Protected' : 'IP की सुरक्षित प्रकार'}</h2>
            <ul className="provisions-list">
              <li>{language === 'en' ? 'Patents and Inventions' : 'पेटेंट और आविष्कार'}</li>
              <li>{language === 'en' ? 'Copyrights and Literary Works' : 'कॉपीराइट और साहित्यिक कार्य'}</li>
              <li>{language === 'en' ? 'Trademarks and Brand Names' : 'ट्रेडमार्क और ब्रांड नाम'}</li>
              <li>{language === 'en' ? 'Design Patents' : 'डिजाइन पेटेंट'}</li>
              <li>{language === 'en' ? 'Trade Secrets and Confidential Information' : 'व्यापार रहस्य और गोपनीय जानकारी'}</li>
              <li>{language === 'en' ? 'Databases and Software' : 'डेटाबेस और सॉफ्टवेयर'}</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Ownership and Rights' : 'स्वामित्व और अधिकार'}</h2>
            <p>{language === 'en' 
              ? 'The policy clearly defines ownership of IP created during the course of employment, research, or use of university facilities. It establishes fair mechanisms for revenue sharing and benefit allocation among creators and the institution.'
              : 'यह नीति विश्वविद्यालय सुविधाओं के उपयोग के दौरान बनाई गई IP के स्वामित्व को स्पष्ट रूप से परिभाषित करती है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Patent Application Support' : 'पेटेंट आवेदन समर्थन'}</h2>
            <p>{language === 'en' 
              ? 'The university provides financial and legal support for filing patent applications. An IPR Cell assists inventors in documenting, evaluating, and pursuing patent protection for innovative inventions.'
              : 'विश्वविद्यालय पेटेंट आवेदन दाखिल करने के लिए वित्तीय और कानूनी समर्थन प्रदान करता है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Commercialization and Licensing' : 'व्यावसायीकरण और लाइसेंसिंग'}</h2>
            <p>{language === 'en' 
              ? 'The institution has mechanisms for licensing and commercializing IP for benefit of inventors, society, and the university. Technology transfer agreements help translate research innovations into commercial benefits.'
              : 'संस्थान के पास IP के व्यावसायीकरण के लिए तंत्र है जो आविष्कारकों, समाज और विश्वविद्यालय के लाभ के लिए है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Dispute Resolution' : 'विवाद समाधान'}</h2>
            <p>{language === 'en' 
              ? 'The policy includes procedures for resolving disputes related to IP ownership, authorship, and benefit sharing. An IPR Cell committee reviews disputes and provides fair resolution mechanisms.'
              : 'यह नीति IP स्वामित्व, लेखकत्व और लाभ साझाकरण से संबंधित विवादों को हल करने के लिए प्रक्रियाएं शामिल करती है।'
            }</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IPRPolicy;
