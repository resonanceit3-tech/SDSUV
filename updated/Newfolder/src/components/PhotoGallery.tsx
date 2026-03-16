import React from 'react';
import '../styles/PhotoGallery.css';

interface PhotoGalleryProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: 'Photo Gallery',
      subtitle: 'Campus Life & Events',
      description: 'Explore our vibrant campus through our comprehensive photo gallery showcasing student activities, events, and campus facilities.',
      categories: [
        {
          name: 'Campus Life',
          icon: '🏫',
          count: '200+ Photos',
          description: 'Daily campus activities and student life'
        },
        {
          name: 'Academic Events',
          icon: '📚',
          count: '150+ Photos',
          description: 'Seminars, lectures, and academic programs'
        },
        {
          name: 'Cultural Events',
          icon: '🎭',
          count: '180+ Photos',
          description: 'Festivals, performances, and cultural celebrations'
        },
        {
          name: 'Sports & Games',
          icon: '⚽',
          count: '160+ Photos',
          description: 'Sports competitions and athletic events'
        },
        {
          name: 'Ceremonies',
          icon: '🎓',
          count: '120+ Photos',
          description: 'Convocation and special ceremonies'
        },
        {
          name: 'Infrastructure',
          icon: '🏢',
          count: '100+ Photos',
          description: 'Campus facilities and infrastructure tours'
        }
      ],
      contact: 'Browse our extensive photo gallery to see campus highlights'
    },
    hi: {
      title: 'फोटो गैलरी',
      subtitle: 'परिसर जीवन और कार्यक्रम',
      description: 'छात्र गतिविधियों, कार्यक्रमों और परिसर सुविधाओं को प्रदर्शित करने वाली हमारी व्यापक फोटो गैलरी के माध्यम से हमारे जीवंत परिसर का अन्वेषण करें।',
      categories: [
        {
          name: 'परिसर जीवन',
          icon: '🏫',
          count: '200+ फोटो',
          description: 'दैनिक परिसर गतिविधियां और छात्र जीवन'
        },
        {
          name: 'शैक्षणिक कार्यक्रम',
          icon: '📚',
          count: '150+ फोटो',
          description: 'सेमिनार, व्याख्यान और शैक्षणिक कार्यक्रम'
        },
        {
          name: 'सांस्कृतिक कार्यक्रम',
          icon: '🎭',
          count: '180+ फोटो',
          description: 'त्योहार, प्रदर्शन और सांस्कृतिक समारोह'
        },
        {
          name: 'खेल और खेल कूद',
          icon: '⚽',
          count: '160+ फोटो',
          description: 'खेल प्रतियोगिताएं और एथलेटिक कार्यक्रम'
        },
        {
          name: 'समारोह',
          icon: '🎓',
          count: '120+ फोटो',
          description: 'दीक्षांत समारोह और विशेष समारोह'
        },
        {
          name: 'बुनियादी ढांचा',
          icon: '🏢',
          count: '100+ फोटो',
          description: 'परिसर सुविधाएं और बुनियादी ढांचे के दौरे'
        }
      ],
      contact: 'परिसर के मुख्य आकर्षण देखने के लिए हमारी व्यापक फोटो गैलरी ब्राउज़ करें'
    }
  };

  const data = content[language];

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{data.title}</h1>
        <p className="gallery-subtitle">{data.subtitle}</p>
      </div>

      <div className="gallery-container">
        <div className="gallery-description">
          <p>{data.description}</p>
        </div>

        <div className="categories-section">
          <h2>Photo Categories</h2>
          <div className="categories-grid">
            {data.categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p className="count">{category.count}</p>
                <p className="description">{category.description}</p>
                <button className="view-btn">View Photos</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
