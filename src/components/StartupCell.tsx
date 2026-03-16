import React from 'react';
import '../styles/PolicyPages.css';

interface StartupCellProps {
  language: 'en' | 'hi';
  onBack: () => void;
  onHome?: () => void;
}

const StartupCell: React.FC<StartupCellProps> = ({ language, onBack, onHome }) => {
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
          <h1>{language === 'en' ? 'Startup Cell & Incubation Center' : 'स्टार्टअप सेल और इनक्यूबेशन केंद्र'}</h1>
          <p>{language === 'en' ? 'Fostering Entrepreneurship and Innovation' : 'उद्यमिता और नवाचार को बढ़ावा देना'}</p>
        </div>

        <div className="policy-content">
          <section className="content-section">
            <h2>{language === 'en' ? 'Overview' : 'अवलोकन'}</h2>
            <p>{language === 'en' 
              ? 'The Startup Cell & Incubation Center is dedicated to nurturing entrepreneurial ideas and transforming them into viable business ventures. We provide mentorship, funding support, and infrastructure to budding entrepreneurs.'
              : 'स्टार्टअप सेल और इनक्यूबेशन केंद्र उद्यमशील विचारों को पोषित करने और उन्हें व्यवहार्य व्यावसायिक उद्यमों में बदलने के लिए समर्पित है। हम हमारे उद्यमशील युवा उद्यमियों को मार्गदर्शन, financial सहायता और बुनियादी ढांचा प्रदान करते हैं।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Services Offered' : 'प्रदान की गई सेवाएं'}</h2>
            <ul className="provisions-list">
              <li>{language === 'en' ? 'Business Ideation and Validation' : 'व्यावसायिक विचार और मान्यता'}</li>
              <li>{language === 'en' ? 'Business Plan Development' : 'व्यावसायिक योजना विकास'}</li>
              <li>{language === 'en' ? 'Mentorship from Industry Experts' : 'उद्योग विशेषज्ञों से मार्गदर्शन'}</li>
              <li>{language === 'en' ? 'Funding and Financial Assistance' : 'फंडिंग और वित्तीय सहायता'}</li>
              <li>{language === 'en' ? 'Workspace and Lab Facilities' : 'कार्यस्थान और प्रयोगशाला सुविधाएं'}</li>
              <li>{language === 'en' ? 'Networking with Investors and Partners' : 'निवेशकों और भागीदारों के साथ नेटवर्किंग'}</li>
              <li>{language === 'en' ? 'Legal and Compliance Support' : 'कानूनी और अनुपालन समर्थन'}</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Incubation Programs' : 'इनक्यूबेशन कार्यक्रम'}</h2>
            <p>{language === 'en' 
              ? 'We offer structured incubation programs of 6-12 months duration designed to help startups achieve key milestones, validate their business model, and prepare for scaling and investment.'
              : 'हम 6-12 महीने की अवधि के संरचित इनक्यूबेशन कार्यक्रम प्रदान करते हैं जो स्टार्टअप को सफल होने में मदद करते हैं।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'Success Stories' : 'सफलता की कहानियां'}</h2>
            <p>{language === 'en' 
              ? 'Several startups incubated at our center have successfully secured seed funding, launched their products, and created employment opportunities. Our alumni entrepreneurs are making significant contributions to their respective industries.'
              : 'हमारे केंद्र में इनक्यूबेट किए गए कई स्टार्टअप्स को सीड फंडिंग सुरक्षित हुई है, उन्होंने अपने उत्पाद लॉन्च किए हैं और रोजगार के अवसर सृजित किए हैं।'
            }</p>
          </section>

          <section className="content-section">
            <h2>{language === 'en' ? 'How to Apply' : 'आवेदन कैसे करें'}</h2>
            <p>{language === 'en' 
              ? 'If you have an innovative business idea and want to transform it into a startup, please contact the Startup Cell for application details, eligibility criteria, and selection process.'
              : 'यदि आपके पास एक नवीन व्यावसायिक विचार है और इसे स्टार्टअप में बदलना चाहते हैं, तो आवेदन विवरण, पात्रता मानदंड और चयन प्रक्रिया के लिए स्टार्टअप सेल से संपर्क करें।'
            }</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StartupCell;
