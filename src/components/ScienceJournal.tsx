import React from 'react';
import '../styles/ScienceJournal.css';

interface ScienceJournalProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const ScienceJournal: React.FC<ScienceJournalProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Science Journal',
      subtitle: 'Research & Innovation Publication',
      description: 'A peer-reviewed academic journal dedicated to publishing high-quality research in all disciplines of science.',
      stats: [
        { label: 'Published Issues', value: '25+' },
        { label: 'Research Papers', value: '500+' },
        { label: 'Active Reviewers', value: '150+' },
        { label: 'Impact Factor', value: '4.2' }
      ],
      sections: [
        {
          title: 'Physics',
          icon: '⚛️',
          description: 'Theoretical and experimental physics research'
        },
        {
          title: 'Chemistry',
          icon: '🧪',
          description: 'Chemical sciences and molecular research'
        },
        {
          title: 'Biology',
          icon: '🔬',
          description: 'Life sciences and biological studies'
        },
        {
          title: 'Mathematics',
          icon: '📐',
          description: 'Mathematical theories and applications'
        },
        {
          title: 'Environmental Science',
          icon: '🌱',
          description: 'Ecology and sustainability research'
        },
        {
          title: 'Technology',
          icon: '💻',
          description: 'Advanced technology and innovation'
        }
      ],
      cta: 'Submit Your Research'
    },
    hi: {
      title: 'विज्ञान पत्रिका',
      subtitle: 'अनुसंधान और नवाचार प्रकाशन',
      description: 'विज्ञान के सभी विषयों में उच्च-गुणवत्ता अनुसंधान प्रकाशित करने के लिए समर्पित एक सहकर्मी-समीक्षा शैक्षणिक पत्रिका।',
      stats: [
        { label: 'प्रकाशित अंक', value: '25+' },
        { label: 'अनुसंधान पत्र', value: '500+' },
        { label: 'सक्रिय समीक्षक', value: '150+' },
        { label: 'प्रभाव कारक', value: '4.2' }
      ],
      sections: [
        {
          title: 'भौतिकी',
          icon: '⚛️',
          description: 'सैद्धांतिक और प्रायोगिक भौतिकी अनुसंधान'
        },
        {
          title: 'रसायन विज्ञान',
          icon: '🧪',
          description: 'रासायनिक विज्ञान और आणविक अनुसंधान'
        },
        {
          title: 'जीव विज्ञान',
          icon: '🔬',
          description: 'जीवन विज्ञान और जैविक अध्ययन'
        },
        {
          title: 'गणित',
          icon: '📐',
          description: 'गणितीय सिद्धांत और अनुप्रयोग'
        },
        {
          title: 'पर्यावरण विज्ञान',
          icon: '🌱',
          description: 'पारिस्थितिकी और स्थिरता अनुसंधान'
        },
        {
          title: 'प्रौद्योगिकी',
          icon: '💻',
          description: 'उन्नत प्रौद्योगिकी और नवाचार'
        }
      ],
      cta: 'अपना अनुसंधान जमा करें'
    }
  };

  const data = content[language];

  return (
    <div className="journal-page">
      <div className="journal-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="journal-subtitle">{data.subtitle}</p>
      </div>

      <div className="journal-container">
        <div className="journal-description">
          <p>{data.description}</p>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            {data.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sections-section">
          <h2>Research Sections</h2>
          <div className="sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="section-card">
                <div className="section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <button className="submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default ScienceJournal;
