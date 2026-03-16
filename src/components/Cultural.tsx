import React from 'react';
import '../styles/Cultural.css';

interface CulturalProps {
  language: 'en' | 'hi';
  onBack: () => void;
  onHome?: () => void;
}

const Cultural: React.FC<CulturalProps> = ({ language, onBack, onHome }) => {
  const culturalPrograms = [
    {
      id: 1,
      nameEn: 'Music & Dance',
      nameHi: 'संगीत और नृत्य',
      descriptionEn: 'Classical and contemporary music & dance programs',
      descriptionHi: 'शास्त्रीय और समकालीन संगीत और नृत्य कार्यक्रम',
      icon: '🎵'
    },
    {
      id: 2,
      nameEn: 'Theatre & Drama',
      nameHi: 'थिएटर और नाटक',
      descriptionEn: 'Stage performances and dramatic arts training',
      descriptionHi: 'मंच प्रदर्शन और नाटकीय कला प्रशिक्षण',
      icon: '🎭'
    },
    {
      id: 3,
      nameEn: 'Visual Arts',
      nameHi: 'दृश्य कला',
      descriptionEn: 'Painting, sculpture, and digital art workshops',
      descriptionHi: 'पेंटिंग, मूर्तिकला और डिजिटल कला कार्यशाला',
      icon: '🎨'
    },
    {
      id: 4,
      nameEn: 'Literary Fest',
      nameHi: 'साहित्य महोत्सव',
      descriptionEn: 'Poetry, writing, and literary competitions',
      descriptionHi: 'काव्य, लेखन और साहित्यिक प्रतियोगिताएं',
      icon: '✍️'
    },
    {
      id: 5,
      nameEn: 'Cultural Fest',
      nameHi: 'सांस्कृतिक महोत्सव',
      descriptionEn: 'Annual celebration of diverse cultures and traditions',
      descriptionHi: 'विविध संस्कृतियों और परंपराओं का वार्षिक उत्सव',
      icon: '🎪'
    },
    {
      id: 6,
      nameEn: 'Photography Club',
      nameHi: 'फोटोग्राफी क्लब',
      descriptionEn: 'Photography exhibitions and workshops',
      descriptionHi: 'फोटोग्राफी प्रदर्शनी और कार्यशाला',
      icon: '📸'
    }
  ];

  return (
    <div className="cultural-page">
      <div className="navigation-buttons">
        <button className="back-button" onClick={onBack}>
          ← {language === 'en' ? 'Back' : 'पीछे'}
        </button>
        <button className="home-button" onClick={onHome || onBack}>
          🏠 {language === 'en' ? 'Home' : 'होम'}
        </button>
      </div>

      <div className="cultural-container">
        <div className="cultural-header">
          <h1>{language === 'en' ? 'Cultural Activities' : 'सांस्कृतिक गतिविधियां'}</h1>
          <p>{language === 'en' ? 'Celebrating diversity and fostering creative expression' : 'विविधता का जश्न मनाना और रचनात्मक अभिव्यक्ति को प्रोत्साहित करना'}</p>
        </div>

        <div className="cultural-info-section">
          <h2>{language === 'en' ? 'Our Cultural Mission' : 'हमारा सांस्कृतिक मिशन'}</h2>
          <p>{language === 'en' 
            ? 'We celebrate the rich cultural heritage and promote artistic expression among our students. Our cultural programs provide a platform for students to showcase their talents, learn new art forms, and appreciate diverse traditions from around the world.'
            : 'हम समृद्ध सांस्कृतिक विरासत का जश्न मनाते हैं और अपने छात्रों के बीच कलात्मक अभिव्यक्ति को प्रोत्साहित करते हैं। हमारे सांस्कृतिक कार्यक्रम छात्रों को अपनी प्रतिभा प्रदर्शित करने, नई कला रूपों को सीखने और दुनिया भर की विविध परंपराओं की सराहना करने के लिए एक मंच प्रदान करते हैं।'
          }</p>
        </div>

        <div className="cultural-programs">
          <h2>{language === 'en' ? 'Cultural Programs' : 'सांस्कृतिक कार्यक्रम'}</h2>
          <div className="programs-grid">
            {culturalPrograms.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-icon">{program.icon}</div>
                <h3>{language === 'en' ? program.nameEn : program.nameHi}</h3>
                <p>{language === 'en' ? program.descriptionEn : program.descriptionHi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cultural-events">
          <h2>{language === 'en' ? 'Annual Events' : 'वार्षिक कार्यक्रम'}</h2>
          <ul className="events-list">
            <li>{language === 'en' ? 'University Annual Cultural Festival' : 'विश्वविद्यालय वार्षिक सांस्कृतिक महोत्सव'}</li>
            <li>{language === 'en' ? 'Inter-department competitions' : 'विभाग के बीच प्रतियोगिताएं'}</li>
            <li>{language === 'en' ? 'Artist workshops and seminars' : 'कलाकार कार्यशाला और सेमिनार'}</li>
            <li>{language === 'en' ? 'Cultural exchange programs with other institutions' : 'अन्य संस्थानों के साथ सांस्कृतिक विनिमय कार्यक्रम'}</li>
          </ul>
        </div>

        <div className="contact-section">
          <h2>{language === 'en' ? 'Contact Cultural Affairs' : 'सांस्कृतिक कार्यों से संपर्क करें'}</h2>
          <p>{language === 'en' ? 'Email: cultural@university.edu | Phone: +91-XXX-XXXX-XXXX' : 'ईमेल: cultural@university.edu | फोन: +91-XXX-XXXX-XXXX'}</p>
        </div>
      </div>
    </div>
  );
};

export default Cultural;
