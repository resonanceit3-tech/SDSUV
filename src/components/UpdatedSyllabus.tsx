import React from 'react';
import '../styles/UpdatedSyllabus.css';

interface UpdatedSyllabusProps {
  language: 'en' | 'hi';
}

const UpdatedSyllabus: React.FC<UpdatedSyllabusProps> = ({ language }) => {
  const content = {
    en: {
      title: 'UPDATED SYLLABUS',
      subtitle: 'LATEST CURRICULUM FOR ALL PROGRAMS',
      description: 'Our syllabus has been updated to meet the latest educational standards and industry requirements. Download the complete syllabus for your program.',
      programs: [
        {
          name: 'Bachelor Degree',
          courses: ['Arts', 'Science', 'Commerce'],
          icon: '📚'
        },
        {
          name: 'Master Degree',
          courses: ['Arts', 'Science', 'Commerce'],
          icon: '🎓'
        },
        {
          name: 'Ph.D. Program',
          courses: ['All Disciplines'],
          icon: '🔬'
        }
      ],
      downloadBtn: 'Download Syllabus'
    },
    hi: {
      title: 'अद्यतन पाठ्यक्रम',
      subtitle: 'सभी कार्यक्रमों के लिए नवीनतम पाठ्यक्रम',
      description: 'हमारे पाठ्यक्रम को नवीनतम शैक्षणिक मानकों और उद्योग की आवश्यकताओं को पूरा करने के लिए अद्यतन किया गया है।',
      programs: [
        {
          name: 'स्नातक डिग्री',
          courses: ['कला', 'विज्ञान', 'वाणिज्य'],
          icon: '📚'
        },
        {
          name: 'मास्टर डिग्री',
          courses: ['कला', 'विज्ञान', 'वाणिज्य'],
          icon: '🎓'
        },
        {
          name: 'पीएच.डी. कार्यक्रम',
          courses: ['सभी विषय'],
          icon: '🔬'
        }
      ],
      downloadBtn: 'पाठ्यक्रम डाउनलोड करें'
    }
  };

  const data = content[language];

  return (
    <section className="updated-syllabus">
      <div className="section-container">
        <h1>{data.title}</h1>
        <p className="section-subtitle">{data.subtitle}</p>
        <p className="syllabus-description">{data.description}</p>

        <div className="syllabus-grid">
          {data.programs.map((program, index) => (
            <div key={index} className="syllabus-card">
              <div className="syllabus-icon">{program.icon}</div>
              <h3>{program.name}</h3>
              <div className="courses-list">
                {program.courses.map((course, idx) => (
                  <span key={idx} className="course-tag">{course}</span>
                ))}
              </div>
              <button className="download-btn">{data.downloadBtn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatedSyllabus;
