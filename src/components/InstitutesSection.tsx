import React from 'react';
import '../styles/InstitutesSection.css';

interface InstitutesSectionProps {
  language: 'en' | 'hi';
}

interface CollegeItem {
  id: number;
  nameEn: string;
  nameHi: string;
  url: string;
}

interface CollegeCategory {
  titleEn: string;
  titleHi: string;
  items: CollegeItem[];
}

const InstitutesSection: React.FC<InstitutesSectionProps> = ({ language }) => {
  const universityCampus: CollegeItem[] = [
    {
      id: 1,
      nameEn: 'Pandit Lalit Mohan Sharma Government PG College Rishikesh',
      nameHi: 'पंडित ललित मोहन शर्मा सरकारी स्नातकोत्तर महाविद्यालय ऋषिकेश',
      url: '#'
    },
    {
      id: 2,
      nameEn: 'Government Post Graduate College - Gopeshwar, Chamoli',
      nameHi: 'सरकारी स्नातकोत्तर महाविद्यालय - गोपेश्वर, चमोली',
      url: '#'
    }
  ];

  const affiliatedColleges: CollegeItem[] = [
    {
      id: 1,
      nameEn: 'Govt Colleges',
      nameHi: 'सरकारी महाविद्यालय',
      url: '#'
    },
    {
      id: 2,
      nameEn: 'Aided colleges',
      nameHi: 'सहायता प्राप्त महाविद्यालय',
      url: '#'
    },
    {
      id: 3,
      nameEn: 'Private colleges',
      nameHi: 'निजी महाविद्यालय',
      url: '#'
    }
  ];

  const categories: CollegeCategory[] = [
    {
      titleEn: 'University Campus',
      titleHi: 'विश्वविद्यालय परिसर',
      items: universityCampus
    },
    {
      titleEn: 'University Affiliated Colleges',
      titleHi: 'विश्वविद्यालय संबद्ध महाविद्यालय',
      items: affiliatedColleges
    }
  ];

  return (
    <div className="institutes-section">
      <div className="institutes-container">
        <h2 className="institutes-title">
          {language === 'en' ? 'INSTITUTES/DEPARTMENTS/CONSTITUENT COLLEGES' : 'संस्थान/विभाग/घटक महाविद्यालय'}
        </h2>
        
        <div className="institutes-grid">
          {categories.map((category, index) => (
            <div key={index} className="institute-card">
              <div className="institute-header">
                {language === 'en' ? category.titleEn : category.titleHi}
              </div>
              <div className="institute-content">
                <ul className="colleges-list">
                  {category.items.map((item) => (
                    <li key={item.id} className="college-item">
                      <a href={item.url} className="college-link">
                        {language === 'en' ? item.nameEn : item.nameHi}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstitutesSection;
