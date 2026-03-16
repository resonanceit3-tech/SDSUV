import React from 'react';
import '../styles/PanditLalitMohanSharmaCollege.css';

interface PanditLalitMohanSharmaCollegeProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const PanditLalitMohanSharmaCollege: React.FC<PanditLalitMohanSharmaCollegeProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Pandit Lalit Mohan Sharma PG College',
      subtitle: 'Government Postgraduate Institution',
      description: 'A premier government college offering advanced postgraduate education with a focus on research and academic excellence.',
      stats: [
        { label: 'PG Programs', value: '15+' },
        { label: 'Faculty', value: '100+' },
        { label: 'Students', value: '800+' },
        { label: 'Research Papers', value: '200+' }
      ],
      sections: [
        {
          title: 'Master Programs',
          icon: '📚',
          description: 'MA, MSc, and MBA programs in various disciplines'
        },
        {
          title: 'Research Focus',
          icon: '🔍',
          description: 'Active research projects and publication in peer-reviewed journals'
        },
        {
          title: 'Expert Faculty',
          icon: '👨‍🎓',
          description: 'Highly qualified faculty with industry and academic experience'
        },
        {
          title: 'Library Resources',
          icon: '📖',
          description: 'Comprehensive library with digital database and journals'
        },
        {
          title: 'Seminars & Workshops',
          icon: '🎤',
          description: 'Regular seminars and workshops by distinguished scholars'
        },
        {
          title: 'Placements',
          icon: '📊',
          description: 'Good placement record in academic and corporate sectors'
        }
      ],
      cta: 'Explore Programs'
    },
    hi: {
      title: 'पंडित ललित मोहन शर्मा पीजी कॉलेज',
      subtitle: 'सरकारी स्नातकोत्तर संस्थान',
      description: 'अनुसंधान और शैक्षणिक उत्कृष्टता पर ध्यान केंद्रित करते हुए उन्नत स्नातकोत्तर शिक्षा प्रदान करने वाला एक प्रमुख सरकारी कॉलेज।',
      stats: [
        { label: 'पीजी कार्यक्रम', value: '15+' },
        { label: 'संकाय', value: '100+' },
        { label: 'छात्र', value: '800+' },
        { label: 'शोध पत्र', value: '200+' }
      ],
      sections: [
        {
          title: 'मास्टर कार्यक्रम',
          icon: '📚',
          description: 'विभिन्न विषयों में MA, MSc और MBA कार्यक्रम'
        },
        {
          title: 'अनुसंधान केंद्रित',
          icon: '🔍',
          description: 'सक्रिय अनुसंधान परियोजनाएं और पीयर-रिव्यू जर्नल में प्रकाशन'
        },
        {
          title: 'विशेषज्ञ संकाय',
          icon: '👨‍🎓',
          description: 'उद्योग और शैक्षणिक अनुभव के साथ उच्च योग्य संकाय'
        },
        {
          title: 'पुस्तकालय संसाधन',
          icon: '📖',
          description: 'डिजिटल डेटाबेस और पत्रिकाओं के साथ व्यापक पुस्तकालय'
        },
        {
          title: 'सेमिनार और कार्यशाला',
          icon: '🎤',
          description: 'प्रतिष्ठित विद्वानों द्वारा नियमित सेमिनार और कार्यशाला'
        },
        {
          title: 'प्लेसमेंट',
          icon: '📊',
          description: 'शैक्षणिक और कॉर्पोरेट क्षेत्रों में अच्छा प्लेसमेंट रिकॉर्ड'
        }
      ],
      cta: 'कार्यक्रम देखें'
    }
  };

  const data = content[language];

  return (
    <div className="pandit-lalit-college-page">
      <div className="pandit-lalit-college-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="pandit-lalit-college-subtitle">{data.subtitle}</p>
      </div>

      <div className="pandit-lalit-college-container">
        <div className="pandit-lalit-college-description">
          <p>{data.description}</p>
        </div>

        <div className="pandit-lalit-college-stats">
          <div className="pandit-lalit-college-stats-grid">
            {data.stats.map((stat, index) => (
              <div key={index} className="pandit-lalit-college-stat-card">
                <div className="pandit-lalit-college-stat-value">{stat.value}</div>
                <div className="pandit-lalit-college-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pandit-lalit-college-sections">
          <div className="pandit-lalit-college-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="pandit-lalit-college-section-card">
                <div className="pandit-lalit-college-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pandit-lalit-college-cta">
          <button className="pandit-lalit-college-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default PanditLalitMohanSharmaCollege;
