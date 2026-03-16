import React from 'react';
import '../styles/Sports.css';

interface SportsProps {
  language: 'en' | 'hi';
  onBack: () => void;
  onHome?: () => void;
}

const Sports: React.FC<SportsProps> = ({ language, onBack, onHome }) => {
  const sportsEvents = [
    {
      id: 1,
      sport: 'Table Tennis',
      category: 'Women',
      organizingUniversity: 'University of Delhi',
      dates: '28 Dec 2022 to 04 Jan 2023',
      imagePlaceholder: 'table-tennis-women',
      image: '/img/sports-events/table-tennis-women.jpg'
    },
    {
      id: 2,
      sport: 'Cricket',
      category: 'Men',
      organizingUniversity: 'Kurukshetra University, Kurukshetra',
      dates: '26 Feb to 03 Mar 2023',
      imagePlaceholder: 'cricket-men',
      image: '/img/sports-events/image-1773141913736.png'
    },
    {
      id: 3,
      sport: 'Kho-Kho',
      category: 'Men',
      organizingUniversity: 'Chaudhry Charan Singh University, Meerut',
      dates: '05 Apr to 16 Apr 2023',
      imagePlaceholder: 'khokho-men',
      image: '/img/sports-events/image-1773141919971.png'
    },
    {
      id: 4,
      sport: 'Badminton',
      category: 'Men',
      organizingUniversity: 'Chitkara University, Punjab',
      dates: '24 Nov to 29 Nov 2023',
      imagePlaceholder: 'badminton-men',
      image: '/img/sports-events/image-1773141929953.png'
    },
    {
      id: 5,
      sport: 'Volleyball',
      category: 'Women',
      organizingUniversity: 'University of Kashmir',
      dates: '30 Oct to 03 Nov 2023',
      imagePlaceholder: 'volleyball-women',
      image: '/img/sports-events/volleyball-women-kashmir.png'
    },
    {
      id: 6,
      sport: 'Volleyball',
      category: 'Men',
      organizingUniversity: 'Kurukshetra University',
      dates: '12 Dec to 16 Dec 2023',
      imagePlaceholder: 'volleyball-men',
      image: '/img/sports-events/Volleyball Men.png'
    },
    {
      id: 7,
      sport: 'Kho-Kho',
      category: 'Women',
      organizingUniversity: 'L.P.U Jalandher',
      dates: '16 Dec to 19 Dec 2023',
      imagePlaceholder: 'khokho-women',
      image: '/img/sports-events/kho kho women.png'
    },
    {
      id: 8,
      sport: 'Football',
      category: 'Men',
      organizingUniversity: 'G.N.A University Phagwara',
      dates: '18 Dec to 26 Dec 2023',
      imagePlaceholder: 'football-men',
      image: '/img/sports-events/football.png'
    },
    {
      id: 9,
      sport: 'Table Tennis',
      category: 'Women',
      organizingUniversity: 'Netaji Subhash University & Tech Delhi',
      dates: '23 Dec to 25 Dec 2023',
      imagePlaceholder: 'table-tennis-women-2',
      image: '/img/sports-events/image-1773141995406.png'
    },
    {
      id: 10,
      sport: 'Athletics',
      category: 'Men',
      organizingUniversity: 'K.I.I.T Bhubneshwer, Odisha',
      dates: '23 Dec to 25 Dec 2023',
      imagePlaceholder: 'athletics-men',
      image: '/img/sports-events/image-1773142007928.png'
    },
    {
      id: 11,
      sport: 'Athletics',
      category: 'Women',
      organizingUniversity: 'K.I.I.T Bhubneshwer, Odisha',
      dates: '23 Dec to 25 Dec 2023',
      imagePlaceholder: 'athletics-women',
      image: '/img/sports-events/women atheletic.png'
    }
  ];

  return (
    <div className="sports-page">
      <div className="navigation-buttons">
        <button className="back-button" onClick={onBack}>
          ← {language === 'en' ? 'Back' : 'पीछे'}
        </button>
        <button className="home-button" onClick={onHome || onBack}>
          🏠 {language === 'en' ? 'Home' : 'होम'}
        </button>
      </div>

      <div className="sports-container">
        <div className="sports-header">
          <h1>{language === 'en' ? 'Sri Dev Suman Uttrakhand University - Sports Events' : 'श्री देव सुमन उत्तरखण्ड विश्वविद्यालय - खेल इवेंट्स'}</h1>
          <p>{language === 'en' ? 'University Sports Events and Tournaments' : 'विश्वविद्यालय खेल इवेंट्स और टूर्नामेंट्स'}</p>
        </div>

        <div className="sports-events-section">
          <h2>{language === 'en' ? 'Upcoming & Recent Events' : 'आने वाली और हाल की इवेंट्स'}</h2>
          <div className="events-grid">
            {sportsEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image-placeholder">
                  {event.image ? (
                    <img src={event.image} alt={`${event.sport} ${event.category}`} />
                  ) : (
                    <div className="image-placeholder-content">
                      <span className="placeholder-icon">📸</span>
                      <p className="placeholder-text">{event.sport} {event.category}</p>
                    </div>
                  )}
                </div>
                <div className="event-content">
                  <h3 className="event-headline">
                    Sri Dev Suman Uttrakhand University ({event.sport} {event.category})
                  </h3>
                  <div className="event-details">
                    <div className="detail-item">
                      <span className="detail-label">{language === 'en' ? 'Organizing University:' : 'आयोजन विश्वविद्यालय:'}</span>
                      <span className="detail-value">{event.organizingUniversity}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">{language === 'en' ? 'Dates:' : 'तारीखें:'}</span>
                      <span className="detail-value">{event.dates}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
