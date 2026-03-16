import React from 'react';
import '../styles/NCC.css';

interface NCCProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const NCC: React.FC<NCCProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'NCC - National Cadet Corps',
      subtitle: 'Building Disciplined Leaders',
      description: 'The National Cadet Corps (NCC) at Sri Dev Suman Uttarakhand University focuses on developing discipline, leadership, and patriotism among students.',
      categories: [
        {
          name: 'Army Wing',
          icon: '⚔️',
          count: '80+ Cadets',
          description: 'Military training and discipline'
        },
        {
          name: 'Air Wing',
          icon: '✈️',
          count: '60+ Cadets',
          description: 'Aviation and aerospace training'
        },
        {
          name: 'Naval Wing',
          icon: '⛵',
          count: '50+ Cadets',
          description: 'Naval training and maritime skills'
        },
        {
          name: 'Leadership Programs',
          icon: '🎖️',
          count: '15+ Courses',
          description: 'Leadership development courses'
        },
        {
          name: 'Competitions',
          icon: '🏆',
          count: '12+ Events',
          description: 'Inter-NCC competitions and camps'
        },
        {
          name: 'Community Service',
          icon: '🤲',
          count: '20+ Programs',
          description: 'Social service and outreach programs'
        }
      ],
      contact: 'Join NCC and build your future'
    },
    hi: {
      title: 'एनसीसी - राष्ट्रीय कैडेट कोर',
      subtitle: 'अनुशासित नेताओं का निर्माण',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय में राष्ट्रीय कैडेट कोर (एनसीसी) छात्रों में अनुशासन, नेतृत्व और देशभक्ति विकसित करने पर केंद्रित है।',
      categories: [
        {
          name: 'आर्मी विंग',
          icon: '⚔️',
          count: '80+ कैडेट',
          description: 'सैन्य प्रशिक्षण और अनुशासन'
        },
        {
          name: 'एयर विंग',
          icon: '✈️',
          count: '60+ कैडेट',
          description: 'विमान चालन और अंतरिक्ष प्रशिक्षण'
        },
        {
          name: 'नेवल विंग',
          icon: '⛵',
          count: '50+ कैडेट',
          description: 'नौसैनिक प्रशिक्षण और समुद्री कौशल'
        },
        {
          name: 'नेतृत्व कार्यक्रम',
          icon: '🎖️',
          count: '15+ पाठ्यक्रम',
          description: 'नेतृत्व विकास पाठ्यक्रम'
        },
        {
          name: 'प्रतियोगिताएं',
          icon: '🏆',
          count: '12+ कार्यक्रम',
          description: 'अंतर-एनसीसी प्रतियोगिताएं और शिविर'
        },
        {
          name: 'सामुदायिक सेवा',
          icon: '🤲',
          count: '20+ कार्यक्रम',
          description: 'सामाजिक सेवा और आउटरीच कार्यक्रम'
        }
      ],
      contact: 'एनसीसी में शामिल हों और अपना भविष्य बनाएं'
    }
  };

  const data = content[language];

  return (
    <div className="ncc-page">
      <div className="ncc-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="ncc-subtitle">{data.subtitle}</p>
      </div>

      <div className="ncc-container">
        <div className="ncc-description">
          <p>{data.description}</p>
        </div>

        <div className="ncc-section">
          <h2>NCC Wings & Programs</h2>
          <div className="ncc-grid">
            {data.categories.map((category, index) => (
              <div key={index} className="ncc-card">
                <div className="ncc-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p className="count">{category.count}</p>
                <p className="description">{category.description}</p>
                <button className="join-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NCC;
