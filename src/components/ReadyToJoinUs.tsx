import React from 'react';
import '../styles/ReadyToJoinUs.css';

interface ReadyToJoinUsProps {
  language: 'en' | 'hi';
}

interface TeamMember {
  id: number;
  nameEn: string;
  nameHi: string;
  designationEn: string;
  designationHi: string;
  organizationEn: string;
  organizationHi: string;
  image: string;
}

const ReadyToJoinUs: React.FC<ReadyToJoinUsProps> = ({ language }) => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      nameEn: 'Lt. Gen. Gurmit Singh',
      nameHi: 'लेफ्टिनेंट जनरल गुरमीत सिंह',
      designationEn: 'PVSM, UYSM, AVSM, VSM (Retd)',
      designationHi: 'PVSM, UYSM, AVSM, VSM (सेवानिवृत्त)',
      organizationEn: "Hon'ble Governor of Uttarakhand",
      organizationHi: 'उत्तराखंड के माननीय राज्यपाल',
      image: '/img/team/team-1.png'
    },
    {
      id: 2,
      nameEn: 'Shri Pushkar Singh Dhami',
      nameHi: 'श्री पुष्कर सिंह धामी',
      designationEn: "Hon'ble Chief Minister of Uttarakhand",
      designationHi: 'उत्तराखंड के माननीय मुख्यमंत्री',
      organizationEn: '',
      organizationHi: '',
      image: '/img/team/team-2.jpg'
    },
    {
      id: 3,
      nameEn: 'Dr. Dhan Singh Rawat',
      nameHi: 'डॉ. धन सिंह रावत',
      designationEn: "Hon'ble Minister of Higher Education",
      designationHi: 'उच्च शिक्षा के माननीय मंत्री',
      organizationEn: 'Uttarakhand',
      organizationHi: 'उत्तराखंड',
      image: '/img/team/team-3.jpg'
    },
    {
      id: 4,
      nameEn: 'Prof. N.K. Joshi',
      nameHi: 'प्रो. एन.के. जोशी',
      designationEn: "Hon'ble Vice Chancellor",
      designationHi: 'माननीय कुलाधिपति',
      organizationEn: 'SDSUV',
      organizationHi: 'SDSUV',
      image: '/img/team/team-4.jpg'
    }
  ];

  return (
    <div className="ready-to-join">
      <div className="join-container">
        <div className="join-header">
          <h2>{language === 'en' ? 'Ready to Join Us?' : 'क्या आप हमारे साथ जुड़ने के लिए तैयार हैं?'}</h2>
          <p>{language === 'en' ? 'Take the first step towards your academic excellence. Apply now for the 2026-2027 academic session.' : 'अपनी शैक्षणिक उत्कृष्टता की ओर पहला कदम बढ़ाएं। 2026-2027 शैक्षणिक सत्र के लिए अभी आवेदन करें।'}</p>
          <a href="#" className="admission-button">{language === 'en' ? 'Admission 2026-2027' : 'प्रवेश 2026-2027'}</a>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-wrapper">
                <img src={member.image} alt={language === 'en' ? member.nameEn : member.nameHi} className="team-image" />
              </div>
              <h3 className="team-name">{language === 'en' ? member.nameEn : member.nameHi}</h3>
              <p className="team-designation">{language === 'en' ? member.designationEn : member.designationHi}</p>
              {(language === 'en' ? member.organizationEn : member.organizationHi) && 
                <p className="team-organization">{language === 'en' ? member.organizationEn : member.organizationHi}</p>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadyToJoinUs;
