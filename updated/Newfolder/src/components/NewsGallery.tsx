import React from 'react';
import '../styles/NewsGallery.css';

interface NewsGalleryProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const NewsGallery: React.FC<NewsGalleryProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'News Gallery',
      subtitle: 'Latest Updates & Headlines',
      description: 'Stay updated with the latest news, announcements, and important updates from Sri Dev Suman Uttarakhand University.',
      categories: [
        {
          name: 'Breaking News',
          icon: '📰',
          count: '50+ Articles',
          description: 'Latest breaking news and announcements'
        },
        {
          name: 'Academic Updates',
          icon: '📖',
          count: '45+ Articles',
          description: 'Academic programs and curriculum updates'
        },
        {
          name: 'Campus News',
          icon: '📢',
          count: '60+ Articles',
          description: 'Campus events and administrative updates'
        },
        {
          name: 'Student Stories',
          icon: '👥',
          count: '40+ Articles',
          description: 'Student achievements and success stories'
        },
        {
          name: 'Research Updates',
          icon: '🔬',
          count: '35+ Articles',
          description: 'Research initiatives and publications'
        },
        {
          name: 'Announcements',
          icon: '📣',
          count: '55+ Articles',
          description: 'Official announcements and notices'
        }
      ],
      contact: 'Read our latest news and updates'
    },
    hi: {
      title: 'समाचार गैलरी',
      subtitle: 'नवीनतम समाचार और शीर्षक',
      description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय से नवीनतम समाचार, घोषणाएं और महत्वपूर्ण अपडेट के साथ अद्यतन रहें।',
      categories: [
        {
          name: 'ताजा समाचार',
          icon: '📰',
          count: '50+ लेख',
          description: 'नवीनतम समाचार और घोषणाएं'
        },
        {
          name: 'शैक्षणिक अपडेट',
          icon: '📖',
          count: '45+ लेख',
          description: 'शैक्षणिक कार्यक्रम और पाठ्यक्रम अपडेट'
        },
        {
          name: 'परिसर समाचार',
          icon: '📢',
          count: '60+ लेख',
          description: 'परिसर कार्यक्रम और प्रशासनिक अपडेट'
        },
        {
          name: 'छात्र कहानियां',
          icon: '👥',
          count: '40+ लेख',
          description: 'छात्र उपलब्धियां और सफलता की कहानियां'
        },
        {
          name: 'अनुसंधान अपडेट',
          icon: '🔬',
          count: '35+ लेख',
          description: 'अनुसंधान पहल और प्रकाशन'
        },
        {
          name: 'घोषणाएं',
          icon: '📣',
          count: '55+ लेख',
          description: 'आधिकारिक घोषणाएं और नोटिस'
        }
      ],
      contact: 'हमारे नवीनतम समाचार और अपडेट पढ़ें'
    }
  };

  const data = content[language];

  return (
    <div className="news-page">
      <div className="news-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="news-subtitle">{data.subtitle}</p>
      </div>

      <div className="news-container">
        <div className="news-description">
          <p>{data.description}</p>
        </div>

        <div className="news-section">
          <h2>News Categories</h2>
          <div className="news-grid">
            {data.categories.map((category, index) => (
              <div key={index} className="news-card">
                <div className="news-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p className="count">{category.count}</p>
                <p className="description">{category.description}</p>
                <button className="read-btn">Read News</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsGallery;
