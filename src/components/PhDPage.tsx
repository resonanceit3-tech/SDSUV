import React from 'react';
import '../styles/PolicyPages.css';

interface PhDPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
  onHome?: () => void;
}

const PhDPage: React.FC<PhDPageProps> = ({ language, onBack, onHome }) => {
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
          <h1>{language === 'en' ? 'Ph.D. and D.Litt. Programs' : 'पीएच.डी. और डी.लिट्. कार्यक्रम'}</h1>
          <p>{language === 'en' ? 'Advanced Research and Doctoral Education' : 'उन्नत अनुसंधान और डॉक्टरल शिक्षा'}</p>
        </div>

        <div className="policy-content">
          <section className="content-section">
            <h2>{language === 'en' ? 'About Ph.D. Program' : 'पीएच.डी. कार्यक्रम के बारे में'}</h2>
            <p>{language === 'en' 
              ? 'The Ph.D. program is designed for scholars seeking advanced research training and expertise development. It provides opportunities for original research, scholarly engagement, and contribution to knowledge in various disciplines.'
              : 'पीएच.डी. कार्यक्रम उन विद्वानों के लिए डिजाइन किया गया है जो उन्नत अनुसंधान प्रशिक्षण और विशेषज्ञता विकास की मांग कर रहे हैं।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Admission Criteria' : 'प्रवेश मानदंड'}</h2>
            <ul className="provisions-list">
              <li>{language === 'en' ? 'Minimum Master\'s degree or equivalent qualification' : 'न्यूनतम मास्टर डिग्री या समकक्ष योग्यता'}</li>
              <li>{language === 'en' ? 'Valid GATE/NET/CSIR score' : 'वैध GATE/NET/CSIR स्कोर'}</li>
              <li>{language === 'en' ? 'Merit in entrance examination or evaluation' : 'प्रवेश परीक्षा में योग्यता'}</li>
              <li>{language === 'en' ? 'Research aptitude and academic interest' : 'अनुसंधान योग्यता और शैक्षणिक रुचि'}</li>
              <li>{language === 'en' ? 'Interview by research committee' : 'अनुसंधान समिति द्वारा साक्षात्कार'}</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Duration and Structure' : 'अवधि और संरचना'}</h2>
            <p>{language === 'en' 
              ? 'The Ph.D. program typically spans 3-6 years depending on the discipline. It includes coursework in the first semester, followed by comprehensive examination and original research leading to dissertation.'
              : 'पीएच.डी. कार्यक्रम आमतौर पर अनुशासन के आधार पर 3-6 साल तक रहता है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Research Areas' : 'अनुसंधान क्षेत्र'}</h2>
            <p>{language === 'en' 
              ? 'Ph.D. research is offered across diverse disciplines including Science, Engineering, Commerce, Arts, Humanities, and Professional Studies, with state-of-the-art research facilities and experienced supervisory teams.'
              : 'पीएच.डी. अनुसंधान विज्ञान, इंजीनियरिंग, वाणिज्य, कला और मानविकी सहित विविध अनुशासनों में दिया जाता है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'D.Litt. Program' : 'डी.लिट्. कार्यक्रम'}</h2>
            <p>{language === 'en' 
              ? 'D.Litt. (Doctor of Letters) is an honoris causa degree awarded to scholars with distinguished academic contributions and significant research impact. It recognizes lifetime achievement and scholarly excellence.'
              : 'डी.लिट्. (डॉक्टर ऑफ लेटर्स) एक मानद डिग्री है जो प्रतिष्ठित शैक्षणिक योगदान वाले विद्वानों को दी जाती है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Scholarships and Support' : 'छात्रवृत्ति और समर्थन'}</h2>
            <p>{language === 'en' 
              ? 'Merit scholarships, research assistantships, and financial assistance are available for eligible Ph.D. candidates. The university also provides conference travel grants and research funding.'
              : 'योग्य पीएच.डी. उम्मीदवारों के लिए मेरिट छात्रवृत्ति, अनुसंधान सहायता और वित्तीय सहायता उपलब्ध है।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Career Prospects' : 'कैरियर की संभावनाएं'}</h2>
            <p>{language === 'en' 
              ? 'Ph.D. graduates pursue diverse career paths including academia, research institutions, industry, government organizations, and international organizations. Advanced research training prepares them for leadership roles.'
              : 'पीएच.डी. स्नातक शिक्षा, अनुसंधान संस्थानों, उद्योग और सरकारी संगठनों सहित विविध कैरियर पथ़ का पालन करते हैं।'
            }</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PhDPage;
