import React from 'react';
import '../styles/AdmissionNews.css';

interface AdmissionNewsProps {
  language: 'en' | 'hi';
}

const AdmissionNews: React.FC<AdmissionNewsProps> = ({ language }) => {
  const content = {
    en: {
      latestUpdates: 'Latest Updates',
      newsDescription: 'Stay informed with our recent announcements',
      newsItems: [
        {
          date: 'January 15, 2026',
          tag: 'ANNOUNCEMENT',
          title: 'Admission Portal Opens Today',
          description: 'The online admission portal is now open for all candidates. You can register and start filling your application form. Visit our website to begin the process.'
        },
        {
          date: 'January 14, 2026',
          tag: 'UPDATE',
          title: 'Application Fee Payment Methods',
          description: 'Multiple payment options are now available including credit card, debit card, and net banking for easy application fee payment.'
        },
        {
          date: 'January 12, 2026',
          tag: 'ANNOUNCEMENT',
          title: 'New Courses Added for 2026-27',
          description: 'We are excited to announce the addition of 5 new specialized courses for the academic year 2026-27. Register now to secure your spot.'
        },
        {
          date: 'January 10, 2026',
          tag: 'UPDATE',
          title: 'Merit List Publication Date',
          description: 'The merit list for admission will be published on June 30, 2026. All selected candidates will be notified via email and SMS.'
        },
        {
          date: 'January 08, 2026',
          tag: 'ANNOUNCEMENT',
          title: 'Document Verification Guidelines',
          description: 'All candidates must submit properly verified documents. Check our guidelines for the complete list of required documents and verification process.'
        },
        {
          date: 'January 05, 2026',
          tag: 'UPDATE',
          title: 'Scholarship Opportunities Available',
          description: 'Merit-based scholarships worth up to 50% of annual fees are available for eligible candidates. Apply now to avail benefits.'
        },
        {
          date: 'December 30, 2025',
          tag: 'ANNOUNCEMENT',
          title: 'Campus Tour Virtual Sessions',
          description: 'Join our virtual campus tours every Thursday at 3 PM to explore our facilities and meet our faculty members. Register today!'
        },
        {
          date: 'December 28, 2025',
          tag: 'UPDATE',
          title: 'FAQs Section Updated',
          description: 'We have updated our frequently asked questions section with answers to common queries about the admission process and course details.'
        },
        {
          date: 'December 25, 2025',
          tag: 'ANNOUNCEMENT',
          title: 'Counseling Sessions for Applicants',
          description: 'Free admission counseling sessions are available for all applicants. Book your slot now to get personalized guidance from experts.'
        },
        {
          date: 'December 20, 2025',
          tag: 'UPDATE',
          title: 'Hostel Registration Portal Launched',
          description: 'Students interested in hostel accommodation can now register through our online portal. Limited seats available, register quickly.'
        }
      ]
    },
    hi: {
      latestUpdates: 'नवीनतम अपडेट',
      newsDescription: 'हमारी हाल की घोषणाओं से अवगत रहें',
      newsItems: [
        {
          date: '15 जनवरी 2026',
          tag: 'घोषणा',
          title: 'प्रवेश पोर्टल आज खुलता है',
          description: 'ऑनलाइन प्रवेश पोर्टल अब सभी उम्मीदवारों के लिए खुला है। आप पंजीकरण कर सकते हैं और अपना आवेदन पत्र भरना शुरू कर सकते हैं।'
        },
        {
          date: '14 जनवरी 2026',
          tag: 'अपडेट',
          title: 'आवेदन शुल्क भुगतान विधियाँ',
          description: 'क्रेडिट कार्ड, डेबिट कार्ड और नेट बैंकिंग सहित आवेदन शुल्क भुगतान के लिए कई विकल्प अब उपलब्ध हैं।'
        },
        {
          date: '12 जनवरी 2026',
          tag: 'घोषणा',
          title: '2026-27 के लिए नए पाठ्यक्रम जोड़े गए',
          description: 'हम शैक्षणिक वर्ष 2026-27 के लिए 5 नए विशेष पाठ्यक्रमों को जोड़ने की घोषणा करते हैं। अभी पंजीकरण करें।'
        },
        {
          date: '10 जनवरी 2026',
          tag: 'अपडेट',
          title: 'मेरिट सूची प्रकाशन तारीख',
          description: 'प्रवेश के लिए मेरिट सूची 30 जून 2026 को प्रकाशित की जाएगी। सभी चयनित उम्मीदवारों को ईमेल और एसएमएस के माध्यम से सूचित किया जाएगा।'
        },
        {
          date: '8 जनवरी 2026',
          tag: 'घोषणा',
          title: 'दस्तावेज सत्यापन दिशानिर्देश',
          description: 'सभी उम्मीदवारों को सही तरीके से सत्यापित दस्तावेज जमा करने चाहिए। आवश्यक दस्तावेजों की पूरी सूची देखें।'
        },
        {
          date: '5 जनवरी 2026',
          tag: 'अपडेट',
          title: 'छात्रवृत्ति के अवसर उपलब्ध',
          description: 'योग्य उम्मीदवारों के लिए वार्षिक शुल्क का 50% तक की योग्यता-आधारित छात्रवृत्तियाँ उपलब्ध हैं।'
        },
        {
          date: '30 दिसंबर 2025',
          tag: 'घोषणा',
          title: 'कैंपस टूर वर्चुअल सत्र',
          description: 'हर गुरुवार दोपहर 3 बजे हमारे वर्चुअल कैंपस टूर में शामिल हों और हमारी सुविधाएं देखें।'
        },
        {
          date: '28 दिसंबर 2025',
          tag: 'अपडेट',
          title: 'FAQ अनुभाग अपडेट किया गया',
          description: 'हमने प्रवेश प्रक्रिया के बारे में सामान्य प्रश्नों के उत्तर के साथ अपने FAQ अनुभाग को अपडेट किया है।'
        },
        {
          date: '25 दिसंबर 2025',
          tag: 'घोषणा',
          title: 'आवेदकों के लिए परामर्श सत्र',
          description: 'सभी आवेदकों के लिए मुफ्त प्रवेश परामर्श सत्र उपलब्ध हैं। व्यक्तिगत मार्गदर्शन के लिए अपने स्लॉट को बुक करें।'
        },
        {
          date: '20 दिसंबर 2025',
          tag: 'अपडेट',
          title: 'छात्रावास पंजीकरण पोर्टल लॉन्च',
          description: 'छात्रावास आवास में रुचि रखने वाले छात्र अब हमारे ऑनलाइन पोर्टल के माध्यम से पंजीकरण कर सकते हैं।'
        }
      ]
    }
  };

  const data = content[language];

  return (
    <section className="admission-news">
      <div className="news-header">
        <div className="section-container">
          <div className="news-header-content">
            <div className="news-icon-square">■</div>
            <div className="news-title-group">
              <h1>{data.latestUpdates}</h1>
              <p>{data.newsDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="news-container">
        <div className="section-container">
          <div className="news-scroll-wrapper">
            {data.newsItems.map((item, index) => (
              <div key={index} className="news-card">
                <div className="news-header-info">
                  <span className="news-date">{item.date}</span>
                  <span className="news-tag">{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionNews;
