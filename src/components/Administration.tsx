import React from 'react';
import '../styles/Administration.css';

interface AdministrationProps {
  language: 'en' | 'hi';
}

const Administration: React.FC<AdministrationProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Administration',
      viceChancellor: 'Vice-Chancellor',
      lokpal: 'Lokpal',
      registrar: 'Registrar',
      financeOfficer: 'Finance Officer',
      controllerExamination: 'Controller of Examination',
      deputyExamController: 'Deputy Exam Controller',
      assistantExamController: 'Assistant Exam Controller (Main Exam)',
      assistantRegistrar: 'Assistant Registrar',
      administrativeOffice: 'Administrative Office',
      mainAdministrativeOffice: 'Main Administrative Office',
      staff: [
        {
          category: 'Vice-Chancellor',
          members: [
            {
              name: 'Prof. N. K. Joshi',
              position: 'Vice-Chancellor',
              email: 'vc@sdsu.edu.in',
              phone: '+91-3435-2356-100',
              officeHours: 'Monday to Friday, 10:00 AM - 5:00 PM',
              image: '/img/joshi.jpg'
            }
          ]
        },
        {
          category: 'Lokpal',
          members: [
            {
              name: 'Ms. Melkamiauma',
              position: 'Lokpal (University Ombudsman)',
              email: 'melkamiauma@yahoo.in',
              phone: '+91-3435-2356-200',
              description: 'For grievance redressal and complaint handling',
              image: '/img/Administrator/uma1.jpg'
            }
          ]
        },
        {
          category: 'Registrar',
          members: [
            {
              name: 'Shri Dinesh Chandra Registrar',
              position: 'Registrar',
              email: 'registrarsdsu2018@gmail.com',
              phone: '+91-9520871192',
              officeHours: 'Monday to Friday, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/dinesh.jpg'
            }
          ]
        },
        {
          category: 'Finance Officer',
          members: [
            {
              name: 'Manoj Kumar Pankey',
              position: 'Finance Officer',
              email: 'financeofficersdsuv@gmail.com',
              phone: '+91-9520871193',
              officeHours: 'Monday to Friday, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/Manoj.jpg'
            }
          ]
        },
        {
          category: 'Controller of Examination',
          members: [
            {
              name: 'Dr Prof. Swati Negi',
              position: 'Controller of Examination',
              email: 'coesdsuv@gmail.com',
              phone: '+91 9520871194',
              officeHours: 'Monday to Friday, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/COE2.jpeg'
            }
          ]
        },
        {
          category: 'Deputy Exam Controller',
          members: [
            {
              name: 'Dr. Hemant Bisht',
              position: 'Deputy Exam Controller',
              email: 'drhemantbisht5@gmail.com',
              phone: '+91-9520871195',
              officeHours: 'Monday to Friday, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/hemant.jpg'
            }
          ]
        },
        {
          category: 'Assistant Exam Controller (Main Exam)',
          members: [
            {
              name: 'Dr. B.L. Arya',
              position: 'Assistant Exam Controller (Main Exam)',
              email: 'Acmain.sdsuv@gmail.com',
              phone: '+91-9520871196',
              officeHours: 'Monday to Friday, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/AEC.jpg'
            }
          ]
        },
        {
          category: 'Assistant Registrar',
          members: [
            {
              name: 'Vijay Singh',
              position: 'Assistant Registrar',
              email: 'arfinance.sdsuv@gmail.com',
              phone: '+91-9520871198',
              officeHours: 'Monday to Friday, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/Vijay.jpg'
            },
            {
              name: 'Pramod Beinjwal',
              position: 'Assistant Registrar',
              email: 'Pramodben@gmail.com',
              phone: 'NA',
              officeHours: 'Monday to Friday, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/Pramod.jpg'
            }
          ]
        }
      ]
    },
    hi: {
      title: 'प्रशासन',
      viceChancellor: 'कुलाधिपति',
      lokpal: 'लोकपाल',
      registrar: 'रजिस्ट्रार',
      financeOfficer: 'वित्त अधिकारी',
      controllerExamination: 'परीक्षा नियंत्रक',
      deputyExamController: 'उप परीक्षा नियंत्रक',
      assistantExamController: 'सहायक परीक्षा नियंत्रक (मुख्य परीक्षा)',
      assistantRegistrar: 'सहायक रजिस्ट्रार',
      administrativeOffice: 'प्रशासनिक कार्यालय',
      mainAdministrativeOffice: 'मुख्य प्रशासनिक कार्यालय',
      staff: [
        {
          category: 'कुलाधिपति',
          members: [
            {
              name: 'प्रो. एन. के. जोशी',
              position: 'कुलाधिपति',
              email: 'vc@sdsu.edu.in',
              phone: '+91-3435-2356-100',
              officeHours: 'सोमवार से शुक्रवार, 10:00 AM - 5:00 PM',
              image: '/img/joshi.jpg'
            }
          ]
        },
        {
          category: 'लोकपाल',
          members: [
            {
              name: 'श्रीमती मेलकमियौमा',
              position: 'लोकपाल (विश्वविद्यालय लोकपाल)',
              email: 'melkamiauma@yahoo.in',
              phone: '+91-3435-2356-200',
              description: 'शिकायत निवारण और शिकायत संभालने के लिए',
              image: '/img/Administrator/uma1.jpg'
            }
          ]
        },
        {
          category: 'रजिस्ट्रार',
          members: [
            {
              name: 'श्री दिनेश चंद्र रजिस्ट्रार',
              position: 'रजिस्ट्रार',
              email: 'registrarsdsu2018@gmail.com',
              phone: '+91-9520871192',
              officeHours: 'सोमवार से शुक्रवार, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/dinesh.jpg'
            }
          ]
        },
        {
          category: 'वित्त अधिकारी',
          members: [
            {
              name: 'मनोज कुमार पंकेय',
              position: 'वित्त अधिकारी',
              email: 'financeofficersdsuv@gmail.com',
              phone: '+91-9520871193',
              officeHours: 'सोमवार से शुक्रवार, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/Manoj.jpg'
            }
          ]
        },
        {
          category: 'परीक्षा नियंत्रक',
          members: [
            {
              name: 'डॉ प्रो. स्वाति नेगी',
              position: 'परीक्षा नियंत्रक',
              email: 'coesdsuv@gmail.com',
              phone: '+91 9520871194',
              officeHours: 'सोमवार से शुक्रवार, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/COE2.jpeg'
            }
          ]
        },
        {
          category: 'उप परीक्षा नियंत्रक',
          members: [
            {
              name: 'डॉ. हेमंत बिष्ट',
              position: 'उप परीक्षा नियंत्रक',
              email: 'drhemantbisht5@gmail.com',
              phone: '+91-9520871195',
              officeHours: 'सोमवार से शुक्रवार, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/hemant.jpg'
            }
          ]
        },
        {
          category: 'सहायक परीक्षा नियंत्रक (मुख्य परीक्षा)',
          members: [
            {
              name: 'डॉ. बी.एल. आर्य',
              position: 'सहायक परीक्षा नियंत्रक (मुख्य परीक्षा)',
              email: 'Acmain.sdsuv@gmail.com',
              phone: '+91-9520871196',
              officeHours: 'सोमवार से शुक्रवार, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/AEC.jpg'
            }
          ]
        },
        {
          category: 'सहायक रजिस्ट्रार',
          members: [
            {
              name: 'विजय सिंह',
              position: 'सहायक रजिस्ट्रार',
              email: 'arfinance.sdsuv@gmail.com',
              phone: '+91-9520871198',
              officeHours: 'सोमवार से शुक्रवार, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/Vijay.jpg'
            },
            {
              name: 'प्रमोद बेइंजवाल',
              position: 'सहायक रजिस्ट्रार',
              email: 'Pramodben@gmail.com',
              phone: 'NA',
              officeHours: 'सोमवार से शुक्रवार, 10:00 AM - 5:00 PM',
              image: '/img/Administrator/Pramod.jpg'
            }
          ]
        }
      ]
    }
  };

  const data = content[language];

  return (
    <div className="administration-page">
      <div className="administration-container">
        <h1 className="admin-page-title">{data.title}</h1>
        
        {data.staff.map((section, index) => (
          <div key={index} className="staff-section">
            <h2 className="section-title">{section.category}</h2>
            <div className="section-divider"></div>
            
            <div className="staff-members">
              {section.members.map((member, memberIndex) => (
                <div key={memberIndex} className="staff-card">
                  <div className="staff-image-container">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="staff-image"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="250"%3E%3Crect fill="%23e0e0e0" width="200" height="250"/%3E%3Ctext x="50%25" y="50%25" font-size="14" fill="%23999" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  
                  <div className="staff-details">
                    <h3 className="staff-name">{member.name}</h3>
                    <p className="staff-position">{member.position}</p>
                    
                    <div className="staff-info">
                      <div className="info-item">
                        <span className="info-label">✉</span>
                        <span className="info-text">{member.email}</span>
                      </div>
                      
                      <div className="info-item">
                        <span className="info-label">☎</span>
                        <span className="info-text">{member.phone}</span>
                      </div>
                      
                      {member.officeHours && (
                        <div className="info-item">
                          <span className="info-label">🕐</span>
                          <span className="info-text">{member.officeHours}</span>
                        </div>
                      )}
                      
                      {member.description && (
                        <div className="info-item">
                          <span className="info-label">ℹ</span>
                          <span className="info-text">{member.description}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Administrative Office Section */}
        <div className="staff-section">
          <h2 className="section-title">{data.administrativeOffice}</h2>
          <div className="section-divider"></div>
          
          <div className="admin-office-card">
            <h3 className="office-title">{data.mainAdministrativeOffice}</h3>
            
            <div className="office-info">
              <div className="office-item">
                <span className="office-icon">📍</span>
                <span className="office-text">Sri Dev Suman Uttarakhand University, Badshahi Thaul, Tehri Garhwal, Uttarakhand</span>
              </div>
              
              <div className="office-item">
                <span className="office-icon">☎</span>
                <span className="office-text">Phone: +91-3435-2356-222</span>
              </div>
              
              <div className="office-item">
                <span className="office-icon">✉</span>
                <span className="office-text">Email: contact@sdsu.edu.in</span>
              </div>
              
              <div className="office-item">
                <span className="office-icon">🕐</span>
                <span className="office-text">Working Hours: 10:00 AM - 5:00 PM (Monday to Friday)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administration;
