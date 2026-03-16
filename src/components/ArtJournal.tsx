import React from 'react';
import '../styles/ArtJournal.css';

interface ArtJournalProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const ArtJournal: React.FC<ArtJournalProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Art Journal',
      subtitle: 'Creative & Humanities Research Publication',
      description: 'A prestigious journal dedicated to publishing research in arts, humanities, literature, and creative studies.',
      stats: [
        { label: 'Published Issues', value: '18+' },
        { label: 'Research Papers', value: '350+' },
        { label: 'Active Reviewers', value: '100+' },
        { label: 'Impact Factor', value: '3.5' }
      ],
      sections: [
        {
          title: 'Literature',
          icon: '📚',
          description: 'Literary studies and textual analysis'
        },
        {
          title: 'Fine Arts',
          icon: '🎨',
          description: 'Visual arts and artistic expressions'
        },
        {
          title: 'History',
          icon: '📜',
          description: 'Historical studies and cultural heritage'
        },
        {
          title: 'Philosophy',
          icon: '💭',
          description: 'Philosophical inquiry and thought'
        },
        {
          title: 'Cultural Studies',
          icon: '🌏',
          description: 'Culture, identity and society'
        },
        {
          title: 'Performing Arts',
          icon: '🎭',
          description: 'Theatre, music, and dance research'
        }
      ],
      cta: 'Submit Your Work'
    },
    hi: {
      title: 'कला पत्रिका',
      subtitle: 'रचनात्मक और मानविकी अनुसंधान प्रकाशन',
      description: 'कला, मानविकी, साहित्य और रचनात्मक अध्ययन में अनुसंधान प्रकाशित करने के लिए एक प्रतिष्ठित पत्रिका।',
      stats: [
        { label: 'प्रकाशित अंक', value: '18+' },
        { label: 'अनुसंधान पत्र', value: '350+' },
        { label: 'सक्रिय समीक्षक', value: '100+' },
        { label: 'प्रभाव कारक', value: '3.5' }
      ],
      sections: [
        {
          title: 'साहित्य',
          icon: '📚',
          description: 'साहित्यिक अध्ययन और पाठ विश्लेषण'
        },
        {
          title: 'ललित कला',
          icon: '🎨',
          description: 'दृश्य कला और कलात्मक अभिव्यक्ति'
        },
        {
          title: 'इतिहास',
          icon: '📜',
          description: 'ऐतिहासिक अध्ययन और सांस्कृतिक विरासत'
        },
        {
          title: 'दर्शन',
          icon: '💭',
          description: 'दार्शनिक पूछताछ और विचार'
        },
        {
          title: 'सांस्कृतिक अध्ययन',
          icon: '🌏',
          description: 'संस्कृति, पहचान और समाज'
        },
        {
          title: 'प्रदर्शन कला',
          icon: '🎭',
          description: 'थिएटर, संगीत और नृत्य अनुसंधान'
        }
      ],
      cta: 'अपना काम जमा करें'
    }
  };

  const data = content[language];

  return (
    <div className="art-journal-page">
      <div className="art-journal-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="art-journal-subtitle">{data.subtitle}</p>
      </div>

      <div className="art-journal-container">
        <div className="art-journal-description">
          <p>{data.description}</p>
        </div>

        <div className="art-stats-section">
          <div className="art-stats-grid">
            {data.stats.map((stat, index) => (
              <div key={index} className="art-stat-card">
                <div className="art-stat-value">{stat.value}</div>
                <div className="art-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="art-sections-section">
          <h2>Research Sections</h2>
          <div className="art-sections-grid">
            {data.sections.map((section, index) => (
              <div key={index} className="art-section-card">
                <div className="art-section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="art-cta-section">
          <button className="art-submit-btn">{data.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default ArtJournal;
