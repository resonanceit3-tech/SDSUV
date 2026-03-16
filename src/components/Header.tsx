import React, { useState } from 'react';
import '../styles/Header.css';

interface HeaderProps {
  language: 'en' | 'hi';
  setCurrentPage?: (page: string) => void;
}

interface SubMenuItem {
  labelEn: string;
  labelHi: string;
  url: string;
}

const Header: React.FC<HeaderProps> = ({ language, setCurrentPage }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const institutesSubMenu: SubMenuItem[] = [
    {
      labelEn: 'University Campus',
      labelHi: 'विश्वविद्यालय परिसर',
      url: '#'
    },
    {
      labelEn: 'Pandit Lalit Mohan Sharma Government PG College',
      labelHi: 'पंडित ललित मोहन शर्मा सरकारी स्नातकोत्तर महाविद्यालय',
      url: '#'
    },
    {
      labelEn: 'Government Post Graduate College - Gopeshwar, Chamoli',
      labelHi: 'सरकारी स्नातकोत्तर महाविद्यालय - गोपेश्वर, चमोली',
      url: '#'
    },
    {
      labelEn: 'University Affiliated Colleges',
      labelHi: 'विश्वविद्यालय संबद्ध महाविद्यालय',
      url: '#'
    },
    {
      labelEn: 'Government Colleges',
      labelHi: 'सरकारी महाविद्यालय',
      url: '#'
    },
    {
      labelEn: 'Aided Colleges',
      labelHi: 'सहायता प्राप्त महाविद्यालय',
      url: '#'
    },
    {
      labelEn: 'Private Colleges',
      labelHi: 'निजी महाविद्यालय',
      url: '#'
    }
  ];

  const departmentsSubMenu: SubMenuItem[] = [
    { labelEn: 'Biotechnology', labelHi: 'जैव प्रौद्योगिकी', url: '#' },
    { labelEn: 'Botany', labelHi: 'वनस्पति विज्ञान', url: '#' },
    { labelEn: 'Charak School of Pharmacy', labelHi: 'चरक स्कूल ऑफ फार्मेसी', url: '#' },
    { labelEn: 'Chemistry', labelHi: 'रसायन विज्ञान', url: '#' },
    { labelEn: 'Commerce', labelHi: 'वाणिज्य', url: '#' },
    { labelEn: 'Computer Application', labelHi: 'कंप्यूटर अनुप्रयोग', url: '#' },
    { labelEn: 'Economics', labelHi: 'अर्थशास्त्र', url: '#' },
    { labelEn: 'Education', labelHi: 'शिक्षा', url: '#' },
    { labelEn: 'English', labelHi: 'अंग्रेजी', url: '#' },
    { labelEn: 'Environmental Science', labelHi: 'पर्यावरण विज्ञान', url: '#' },
    { labelEn: 'Fine Arts', labelHi: 'ललित कला', url: '#' },
    { labelEn: 'Food Science & Technology', labelHi: 'खाद्य विज्ञान और प्रौद्योगिकी', url: '#' },
    { labelEn: 'Foreign Language', labelHi: 'विदेशी भाषा', url: '#' },
    { labelEn: 'Forensic Science', labelHi: 'फोरेंसिक विज्ञान', url: '#' },
    { labelEn: 'Genetics & Plant Breeding', labelHi: 'आनुवंशिकी और पादप प्रजनन', url: '#' },
    { labelEn: 'Geography', labelHi: 'भूगोल', url: '#' },
    { labelEn: 'Hindi', labelHi: 'हिंदी', url: '#' },
    { labelEn: 'History', labelHi: 'इतिहास', url: '#' },
    { labelEn: 'Home Science', labelHi: 'गृह विज्ञान', url: '#' },
    { labelEn: 'Horticulture', labelHi: 'बागवानी', url: '#' },
    { labelEn: 'Institute of Business Studies', labelHi: 'व्यावसायिक अध्ययन संस्थान', url: '#' },
    { labelEn: 'Institute of Engineering & Technology', labelHi: 'इंजीनियरिंग और प्रौद्योगिकी संस्थान', url: '#' },
    { labelEn: 'Jewellery Design & Technology', labelHi: 'गहने डिजाइन और प्रौद्योगिकी', url: '#' },
    { labelEn: 'Legal Studies', labelHi: 'कानूनी अध्ययन', url: '#' },
    { labelEn: 'Library and Information Science', labelHi: 'पुस्तकालय और सूचना विज्ञान', url: '#' },
    { labelEn: 'Mathematics', labelHi: 'गणित', url: '#' },
    { labelEn: 'Microbiology', labelHi: 'सूक्ष्मजीव विज्ञान', url: '#' },
    { labelEn: 'Physical Education', labelHi: 'शारीरिक शिक्षा', url: '#' },
    { labelEn: 'Physics', labelHi: 'भौतिकी', url: '#' },
    { labelEn: 'Plant Protection', labelHi: 'पादप सुरक्षा', url: '#' },
    { labelEn: 'Political Science', labelHi: 'राजनीति विज्ञान', url: '#' },
    { labelEn: 'Psychology', labelHi: 'मनोविज्ञान', url: '#' },
    { labelEn: 'Sanskrit', labelHi: 'संस्कृत', url: '#' }
  ];

  const academicSubMenu: SubMenuItem[] = [
    { labelEn: 'Faculty of Arts', labelHi: 'कला संकाय', url: '#' },
    { labelEn: 'Faculty of Science', labelHi: 'विज्ञान संकाय', url: '#' },
    { labelEn: 'Faculty of Commerce', labelHi: 'वाणिज्य संकाय', url: '#' },
    { labelEn: 'All Programmes', labelHi: 'सभी कार्यक्रम', url: '#' },
    { labelEn: 'Regular Courses', labelHi: 'नियमित पाठ्यक्रम', url: '#' },
    { labelEn: 'Self Financial Courses', labelHi: 'आत्मनिर्भर वित्तीय पाठ्यक्रम', url: '#' },
    { labelEn: 'Self-Designed Courses', labelHi: 'स्व-डिजाइन किए गए पाठ्यक्रम', url: '#' },
    { labelEn: 'Campus Syllabus', labelHi: 'परिसर पाठ्यक्रम', url: '#' },
    { labelEn: 'College Syllabus', labelHi: 'कॉलेज पाठ्यक्रम', url: '#' },
    { labelEn: 'NEP-2020 Syllabus', labelHi: 'राष्ट्रीय शिक्षा नीति-2020 पाठ्यक्रम', url: '#' },
    { labelEn: 'Skill Development Syllabus', labelHi: 'कौशल विकास पाठ्यक्रम', url: '#' },
    { labelEn: 'Academic Calendar', labelHi: 'शैक्षणिक कैलेंडर', url: '#' },
    { labelEn: 'College Code', labelHi: 'कॉलेज कोड', url: '#' },
    { labelEn: 'Course Code', labelHi: 'पाठ्यक्रम कोड', url: '#' },
    { labelEn: 'Alumni', labelHi: 'पूर्व छात्र', url: '#' },
    { labelEn: 'Feedback', labelHi: 'प्रतिक्रिया', url: '#' }
  ];

  const infrastructureSubMenu: SubMenuItem[] = [
    { labelEn: 'Auditorium', labelHi: 'सभागार', url: '#' },
    { labelEn: 'Canteen', labelHi: 'कैंटीन', url: '#' },
    { labelEn: 'Guest House', labelHi: 'अतिथि गृह', url: '#' },
    { labelEn: 'Hostel', labelHi: 'छात्रावास', url: '#' },
    { labelEn: 'Internet Facility', labelHi: 'इंटरनेट सुविधा', url: '#' },
    { labelEn: 'Placement Call Centre', labelHi: 'प्लेसमेंट कॉल सेंटर', url: '#' },
    { labelEn: 'Healthcare', labelHi: 'स्वास्थ्य सेवा', url: '#' },
    { labelEn: 'Skill Development Centre', labelHi: 'कौशल विकास केंद्र', url: '#' },
    { labelEn: 'Sports and Games', labelHi: 'खेल और खेल कूद', url: '#' },
    { labelEn: 'Computer Lab', labelHi: 'कंप्यूटर प्रयोगशाला', url: '#' },
    { labelEn: 'Library', labelHi: 'पुस्तकालय', url: '#' },
    { labelEn: 'Faculty Development Centre', labelHi: 'संकाय विकास केंद्र', url: '#' },
    { labelEn: 'Centre of Excellence', labelHi: 'उत्कृष्टता केंद्र', url: '#' },
    { labelEn: 'Medical Room', labelHi: 'चिकित्सा कक्ष', url: '#' },
    { labelEn: 'Student Counseling Centre', labelHi: 'छात्र परामर्श केंद्र', url: '#' },
    { labelEn: 'Transportation', labelHi: 'परिवहन', url: '#' }
  ];

  const iqacSubMenu: SubMenuItem[] = [
    { labelEn: 'IQAC', labelHi: 'आईक्यूएसी', url: '#' },
    { labelEn: 'AGAR Reports', labelHi: 'एजीएआर रिपोर्ट', url: '#' },
    { labelEn: 'Minutes of IQAC Meetings', labelHi: 'आईक्यूएसी बैठकों के मिनट', url: '#' },
    { labelEn: 'Best Practices', labelHi: 'सर्वोत्तम प्रथाएं', url: '#' },
    { labelEn: 'IQAC Committee Letter', labelHi: 'आईक्यूएसी समिति पत्र', url: '#' },
    { labelEn: 'Notifications', labelHi: 'सूचनाएं', url: '#' },
    { labelEn: 'Institutional Distinctiveness', labelHi: 'संस्थागत विशिष्टता', url: '#' },
    { labelEn: 'Industry Consultancy Cell', labelHi: 'उद्योग परामर्श कक्ष', url: '#' },
    { labelEn: 'Facilities', labelHi: 'सुविधाएं', url: '#' },
    { labelEn: 'Proceeding AC/BOS', labelHi: 'कार्यवाही एसी/बीओएस', url: '#' },
    { labelEn: 'Student Projects/Field Reports', labelHi: 'छात्र परियोजनाएं/क्षेत्र रिपोर्ट', url: '#' },
    { labelEn: 'Academic Calendar', labelHi: 'शैक्षणिक कैलेंडर', url: '#' },
    { labelEn: 'Audited Statement of Income Expenditure', labelHi: 'आय और व्यय का लेखापरीक्षित विवरण', url: '#' },
    { labelEn: 'Feedback', labelHi: 'प्रतिक्रिया', url: '#' },
    { labelEn: 'Activities', labelHi: 'गतिविधियाँ', url: '#' },
    { labelEn: 'Contact', labelHi: 'संपर्क', url: '#' }
  ];

  const examinationSubMenu: SubMenuItem[] = [
    { labelEn: 'Exam Rules', labelHi: 'परीक्षा नियम', url: '#' },
    { labelEn: 'Exam Related Information', labelHi: 'परीक्षा से संबंधित जानकारी', url: '#' },
    { labelEn: 'Exam Schedule/Revised Exam Schedule', labelHi: 'परीक्षा समय सारणी/संशोधित परीक्षा समय सारणी', url: '#' },
    { labelEn: 'Examination Forms', labelHi: 'परीक्षा फार्म', url: '#' },
    { labelEn: 'Code Books', labelHi: 'कोड बुक', url: '#' }
  ];

  const studentsCornerSubMenu: SubMenuItem[] = [
    { labelEn: 'Syllabus', labelHi: 'पाठ्यक्रम', url: '#' },
    { labelEn: 'Result', labelHi: 'परिणाम', url: '#' },
    { labelEn: 'Anti ragging', labelHi: 'रैगिंग विरोधी', url: '#' },
    { labelEn: 'Conduct & Discipline', labelHi: 'आचरण और अनुशासन', url: '#' },
    { labelEn: 'Hostel Registration', labelHi: 'छात्रावास पंजीकरण', url: '#' },
    { labelEn: 'Online Fees Payment for Campus Courses', labelHi: 'कैंपस पाठ्यक्रमों के लिए ऑनलाइन शुल्क भुगतान', url: '#' },
    { labelEn: 'Campus Fee Payment', labelHi: 'कैंपस शुल्क भुगतान', url: '#' },
    { labelEn: 'Online Provisional & Migration Certificate', labelHi: 'ऑनलाइन अनंतिम और प्रवास प्रमाणपत्र', url: '#' },
    { labelEn: 'Student Council', labelHi: 'छात्र परिषद', url: '#' },
    { labelEn: 'Fee Refund Policy', labelHi: 'शुल्क वापसी नीति', url: '#' },
    { labelEn: 'Student Handbook', labelHi: 'छात्र पुस्तिका', url: '#' },
    { labelEn: 'Student Satisfaction Survey', labelHi: 'छात्र संतुष्टि सर्वेक्षण', url: '#' },
    { labelEn: 'Student Feedback form', labelHi: 'छात्र प्रतिक्रिया फॉर्म', url: '#' },
    { labelEn: 'OMR Keys, Sheet & Response', labelHi: 'OMR कुंजी, शीट और प्रतिक्रिया', url: '#' },
    { labelEn: 'Student Help Desk', labelHi: 'छात्र सहायता डेस्क', url: '#' },
    { labelEn: 'Answer Book Viewing & Challenge Evaluation', labelHi: 'उत्तर पुस्तिका देखना और चुनौती मूल्यांकन', url: '#' },
    { labelEn: 'Women Cell', labelHi: 'महिला कक्ष', url: '#' },
    { labelEn: 'Apply for left out practical/viva', labelHi: 'छोड़ी गई व्यावहारिक/मौखिकी के लिए आवेदन करें', url: '#' },
    { labelEn: 'Document Verification', labelHi: 'दस्तावेज सत्यापन', url: '#' },
    { labelEn: 'NCC', labelHi: 'एनसीसी', url: '#' }
  ];

  const eventsSubMenu: SubMenuItem[] = [
    { labelEn: 'Photo Gallery', labelHi: 'फोटो गैलरी', url: '#' },
    { labelEn: 'News Gallery', labelHi: 'समाचार गैलरी', url: '#' },
    { labelEn: 'Conference/Seminar & Workshop', labelHi: 'सम्मेलन/सेमिनार और कार्यशाला', url: '#' },
    { labelEn: 'Centre of Excellence', labelHi: 'उत्कृष्टता केंद्र', url: '#' },
    { labelEn: 'NCC', labelHi: 'एनसीसी', url: '#' },
    { labelEn: 'Sports', labelHi: 'खेल', url: '#' },
    { labelEn: 'MOUs', labelHi: 'समझौता', url: '#' }
  ];

  const journalsSubMenu: SubMenuItem[] = [
    { labelEn: 'Science Journal', labelHi: 'विज्ञान पत्रिका', url: '#' },
    { labelEn: 'Commerce Journal', labelHi: 'वाणिज्य पत्रिका', url: '#' },
    { labelEn: 'Art Journal', labelHi: 'कला पत्रिका', url: '#' }
  ];

  const staffsSubMenu: SubMenuItem[] = [
    { labelEn: 'Science Faculty Staff', labelHi: 'विज्ञान संकाय कर्मचारी', url: '#' },
    { labelEn: 'Arts Faculty Staff', labelHi: 'कला संकाय कर्मचारी', url: '#' },
    { labelEn: 'Commerce Faculty Staff', labelHi: 'वाणिज्य संकाय कर्मचारी', url: '#' }
  ];

  const content = {
    en: {
      university: 'Sri Dev Suman Uttarakhand University',
      admission: 'Admission 2026-2027',
      nav: ['Home', 'About Us', 'Administration', 'Institutes/Departments/Constituent Colleges', 'Departments', 'Academic', 'Infrastructure', 'IQAC', 'Examination', 'Students Corner', 'Events', 'Journals', 'Staffs']
    },
    hi: {
      university: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय',
      admission: 'प्रवेश 2026-2027',
      nav: ['होम', 'हमारे बारे में', 'प्रशासन', 'संस्थान/विभाग/घटक कॉलेज', 'विभाग', 'अकादमिक', 'बुनियादी ढांचा', 'आईक्यूएसी', 'परीक्षा', 'छात्र कोना', 'इवेंट्स', 'जर्नल', 'स्टाफ']
    }
  };

  const data = content[language];

  const handleDropdownToggle = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleMouseEnter = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleDropdownItemClick = (labelEn: string, labelHi: string) => {
    setOpenDropdown(null);
    
    // Handle institutes/colleges navigation
    if (labelEn === 'University Campus' || labelHi === 'विश्वविद्यालय परिसर') {
      setCurrentPage?.('university-campus');
    } else if (labelEn === 'Pandit Lalit Mohan Sharma Government PG College' || labelHi === 'पंडित ललित मोहन शर्मा सरकारी स्नातकोत्तर महाविद्यालय') {
      setCurrentPage?.('pandit-lalit-college');
    } else if (labelEn === 'Government Post Graduate College - Gopeshwar, Chamoli' || labelHi === 'सरकारी स्नातकोत्तर महाविद्यालय - गोपेश्वर, चमोली') {
      setCurrentPage?.('govt-pg-college');
    } else if (labelEn === 'University Affiliated Colleges' || labelHi === 'विश्वविद्यालय संबद्ध महाविद्यालय') {
      setCurrentPage?.('affiliated-colleges');
    } else if (labelEn === 'Government Colleges' || labelHi === 'सरकारी महाविद्यालय') {
      setCurrentPage?.('govt-colleges');
    } else if (labelEn === 'Aided Colleges' || labelHi === 'सहायता प्राप्त महाविद्यालय') {
      setCurrentPage?.('aided-colleges');
    } else if (labelEn === 'Private Colleges' || labelHi === 'निजी महाविद्यालय') {
      setCurrentPage?.('private-colleges');
    }
    // Handle staff navigation
    else if (labelEn === 'Science Faculty Staff' || labelHi === 'विज्ञान संकाय कर्मचारी') {
      setCurrentPage?.('science-staff');
    } else if (labelEn === 'Arts Faculty Staff' || labelHi === 'कला संकाय कर्मचारी') {
      setCurrentPage?.('arts-staff');
    } else if (labelEn === 'Commerce Faculty Staff' || labelHi === 'वाणिज्य संकाय कर्मचारी') {
      setCurrentPage?.('commerce-staff');
    }
    // Handle events navigation
    else if (labelEn === 'Photo Gallery' || labelHi === 'फोटो गैलरी') {
      setCurrentPage?.('photo-gallery');
    } else if (labelEn === 'News Gallery' || labelHi === 'समाचार गैलरी') {
      setCurrentPage?.('news-gallery');
    } else if (labelEn === 'Conference/Seminar & Workshop' || labelHi === 'सम्मेलन/सेमिनार और कार्यशाला') {
      setCurrentPage?.('conference-seminar');
    } else if (labelEn === 'Centre of Excellence' || labelHi === 'उत्कृष्टता केंद्र') {
      setCurrentPage?.('centre-excellence');
    } else if (labelEn === 'NCC' || labelHi === 'एनसीसी') {
      setCurrentPage?.('ncc');
    } else if (labelEn === 'Sports' || labelHi === 'खेल') {
      setCurrentPage?.('campus-sports-gallery');
    } else if (labelEn === 'MOUs' || labelHi === 'समझौता') {
      setCurrentPage?.('moues');
    }
    // Handle journals navigation
    else if (labelEn === 'Science Journal' || labelHi === 'विज्ञान पत्रिका') {
      setCurrentPage?.('science-journal');
    } else if (labelEn === 'Commerce Journal' || labelHi === 'वाणिज्य पत्रिका') {
      setCurrentPage?.('commerce-journal');
    } else if (labelEn === 'Art Journal' || labelHi === 'कला पत्रिका') {
      setCurrentPage?.('art-journal');
    }
    // Handle students corner navigation
    else if (labelEn === 'Anti ragging' || labelHi === 'रैगिंग विरोधी') {
      setCurrentPage?.('anti-ragging');
    } else if (labelEn === 'Hostel Registration' || labelHi === 'छात्रावास पंजीकरण') {
      setCurrentPage?.('hostel-registration');
    } else if (labelEn === 'Campus Fee Payment' || labelHi === 'कैंपस शुल्क भुगतान') {
      setCurrentPage?.('campus-fee-payment');
    } else if (labelEn === 'Student Council' || labelHi === 'छात्र परिषद') {
      setCurrentPage?.('student-council');
    } else if (labelEn === 'Student Handbook' || labelHi === 'छात्र पुस्तिका') {
      setCurrentPage?.('student-handbook');
    } else if (labelEn === 'Student Feedback form' || labelHi === 'छात्र प्रतिक्रिया फॉर्म') {
      setCurrentPage?.('student-feedback-form');
    } else if (labelEn === 'Student Help Desk' || labelHi === 'छात्र सहायता डेस्क') {
      setCurrentPage?.('student-help-desk');
    } else if (labelEn === 'Women Cell' || labelHi === 'महिला कक्ष') {
      setCurrentPage?.('women-cell');
    } else if (labelEn === 'Document Verification' || labelHi === 'दस्तावेज सत्यापन') {
      setCurrentPage?.('document-verification');
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-section">
          <div className="logo-placeholder">
            <img src="/img/logo.jpg" alt="Sri Dev Suman Uttarakhand University Logo" className="logo-image" />
          </div>
          <h1>{data.university}</h1>
        </div>
        <button className="admission-btn" onClick={() => setCurrentPage?.('admission')}>{data.admission}</button>
      </div>
      <nav className="navbar">
        {data.nav.map((item, index) => {
          const getMenuItems = (itemName: string) => {
            const menus: { [key: string]: SubMenuItem[] } = {
              'Institutes/Departments/Constituent Colleges': institutesSubMenu,
              'संस्थान/विभाग/घटक कॉलेज': institutesSubMenu,
              'Departments': departmentsSubMenu,
              'विभाग': departmentsSubMenu,
              'Academic': academicSubMenu,
              'अकादमिक': academicSubMenu,
              'Infrastructure': infrastructureSubMenu,
              'बुनियादी ढांचा': infrastructureSubMenu,
              'IQAC': iqacSubMenu,
              'आईक्यूएसी': iqacSubMenu,
              'Examination': examinationSubMenu,
              'परीक्षा': examinationSubMenu,
              'Students Corner': studentsCornerSubMenu,
              'छात्र कोना': studentsCornerSubMenu,
              'Events': eventsSubMenu,
              'इवेंट्स': eventsSubMenu,
              'Journals': journalsSubMenu,
              'जर्नल': journalsSubMenu,
              'Staffs': staffsSubMenu,
              'स्टाफ': staffsSubMenu
            };
            return menus[itemName];
          };

          const menuItems = getMenuItems(item);
          const menuClass = item === 'Institutes/Departments/Constituent Colleges' || item === 'संस्थान/विभाग/घटक कॉलेज' ? 'institutes-menu' :
                           item === 'Departments' || item === 'विभाग' ? 'departments-menu' : 
                           item === 'Academic' || item === 'अकादमिक' ? 'academic-menu' : 
                           item === 'Students Corner' || item === 'छात्र कोना' ? 'students-menu' : '';

          return (
            <div 
              key={index} 
              className="nav-item"
              onMouseEnter={menuItems ? (e) => handleMouseEnter(index, e) : undefined}
              onMouseLeave={menuItems ? handleMouseLeave : undefined}
            >
              {menuItems ? (
                <>
                  <button 
                    className="nav-link dropdown-toggle"
                    onClick={(e) => handleDropdownToggle(index, e)}
                  >
                    {item}
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  {openDropdown === index && (
                    <div 
                      className={`dropdown-menu ${menuClass}`}
                    >
                      {menuItems.map((subitem, subindex) => (
                        <a 
                          key={subindex} 
                          href={subitem.url} 
                          className="dropdown-item"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDropdownItemClick(subitem.labelEn, subitem.labelHi);
                          }}
                        >
                          {language === 'en' ? subitem.labelEn : subitem.labelHi}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : item === 'Administration' || item === 'प्रशासन' ? (
                <button 
                  className="nav-link"
                  onClick={() => setCurrentPage?.('administration')}
                >
                  {item}
                </button>
              ) : item === 'About Us' || item === 'हमारे बारे में' ? (
                <button 
                  className="nav-link"
                  onClick={() => setCurrentPage?.('about')}
                >
                  {item}
                </button>
              ) : (
                <a href="#" className="nav-link">{item}</a>
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
