import React from 'react';
import '../styles/PolicyPages.css';

interface RTIActProps {
  language: 'en' | 'hi';
  onBack: () => void;
  onHome?: () => void;
}

const RTIAct: React.FC<RTIActProps> = ({ language, onBack, onHome }) => {
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
          <h1>{language === 'en' ? 'Right to Information Act (RTI)' : 'सूचना का अधिकार अधिनियम (आरटीआई)'}</h1>
          <p>{language === 'en' ? 'Transparency and Accountability in Governance' : 'शासन में पारदर्शिता और जवाबदेही'}</p>
        </div>

        <div className="policy-content">
          <section className="content-section">
            <h2>{language === 'en' ? 'What is RTI?' : 'आरटीआई क्या है?'}</h2>
            <p>{language === 'en' 
              ? 'The Right to Information (RTI) Act, 2005 is a Central legislation that empowers all citizens and institutions to seek information held by public authorities, including universities. It promotes transparency and accountability in governance.'
              : 'सूचना का अधिकार (आरटीआई) अधिनियम, 2005 एक केंद्रीय कानून है जो सभी नागरिकों और संस्थानों को सार्वजनिक प्राधिकारों द्वारा रखी गई जानकारी मांगने का अधिकार देता है। यह शासन में पारदर्शिता और जवाबदेही को बढ़ावा देता है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Scope and Coverage' : 'दायरा और कवरेज'}</h2>
            <p>{language === 'en' 
              ? 'Sri Dev Suman Uttarakhand University being a public institution is subject to RTI Act. Citizens can request information about university operations, budget allocation, admissions, academic programs, and administrative decisions.'
              : 'श्री देव सुमन उत्तरांचल विश्वविद्यालय होने के नाते एक सार्वजनिक संस्थान आरटीआई अधिनियम के अधीन है। नागरिक विश्वविद्यालय संचालन, बजट आवंटन, प्रवेश, शैक्षणिक कार्यक्रमों और प्रशासनिक निर्णयों के बारे में जानकारी का अनुरोध कर सकते हैं।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'How to File an RTI Request' : 'आरटीआई अनुरोध कैसे दाखिल करें'}</h2>
            <ol className="procedures-list">
              <li>{language === 'en' ? 'Submit the request in writing to the Central Public Information Officer (CPIO)' : 'केंद्रीय सार्वजनिक सूचना अधिकारी (CPIO) को लिखित रूप में अनुरोध प्रस्तुत करें'}</li>
              <li>{language === 'en' ? 'Include clear description of information required' : 'आवश्यक जानकारी का स्पष्ट विवरण शामिल करें'}</li>
              <li>{language === 'en' ? 'Pay the prescribed fee (if applicable)' : 'निर्धारित शुल्क का भुगतान करें (यदि लागू हो)'}</li>
              <li>{language === 'en' ? 'CPIO will respond within 30 days' : 'CPIO 30 दिनों के भीतर जवाब देगा'}</li>
              <li>{language === 'en' ? 'Appeal to First Appellate Authority if unsatisfied' : 'असंतुष्ट होने पर प्रथम अपीलीय प्राधिकारी के पास अपील करें'}</li>
            </ol>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Information Exemptions' : 'सूचना छूट'}</h2>
            <p>{language === 'en' 
              ? 'Some information may be exempted from disclosure as per RTI Act Section 8 and 9, including security matters, personal information, information affecting national interest, etc.'
              : 'आरटीआई अधिनियम की धारा 8 और 9 के अनुसार कुछ सूचना प्रकटीकरण से छूट प्राप्त हो सकती है, जिसमें सुरक्षा मामले, व्यक्तिगत जानकारी, राष्ट्रीय हित को प्रभावित करने वाली जानकारी आदि शामिल हैं।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'University CPIO Details' : 'विश्वविद्यालय CPIO विवरण'}</h2>
            <p>{language === 'en' 
              ? 'For filing RTI requests to Sri Dev Suman Uttarakhand University, please contact the designated Central Public Information Officer (CPIO) at the university administration office during working hours.'
              : 'श्री देव सुमन उत्तरांचल विश्वविद्यालय के लिए आरटीआई अनुरोध दाखिल करने के लिए, कार्य के घंटों के दौरान विश्वविद्यालय प्रशासन कार्यालय में नामित केंद्रीय सार्वजनिक सूचना अधिकारी (CPIO) से संपर्क करें।'
            }</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RTIAct;
