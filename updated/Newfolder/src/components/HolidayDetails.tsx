import React from 'react';
import '../styles/HolidayDetails.css';

interface HolidayDetailsProps {
  language: 'en' | 'hi';
}

const HolidayDetails: React.FC<HolidayDetailsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'HOLIDAY CALENDAR',
      subtitle: 'IMPORTANT HOLIDAYS AND VACATION DATES FOR 2026-2027',
      holidays: [
        {
          date: 'January 26, 2026',
          name: 'Republic Day',
          type: 'National Holiday',
          icon: '🇮🇳'
        },
        {
          date: 'March 8-14, 2026',
          name: 'Holi Break',
          type: 'Festival',
          icon: '🎨'
        },
        {
          date: 'March 29-April 14, 2026',
          name: 'Summer Vacation',
          type: 'Long Break',
          icon: '☀️'
        },
        {
          date: 'August 15, 2026',
          name: 'Independence Day',
          type: 'National Holiday',
          icon: '🇮🇳'
        },
        {
          date: 'August 30-Sept 5, 2026',
          name: 'Janmashtami Break',
          type: 'Festival',
          icon: '🪔'
        },
        {
          date: 'October 2, 2026',
          name: 'Gandhi Jayanti',
          type: 'National Holiday',
          icon: '🕯️'
        },
        {
          date: 'October 24-November 2, 2026',
          name: 'Diwali Break',
          type: 'Festival',
          icon: '💡'
        },
        {
          date: 'December 20-January 5, 2027',
          name: 'Winter Vacation',
          type: 'Long Break',
          icon: '❄️'
        }
      ]
    },
    hi: {
      title: 'छुट्टी कैलेंडर',
      subtitle: '2026-2027 के लिए महत्वपूर्ण छुट्टियां और अवकाश की तारीखें',
      holidays: [
        {
          date: '26 जनवरी 2026',
          name: 'गणतंत्र दिवस',
          type: 'राष्ट्रीय छुट्टी',
          icon: '🇮🇳'
        },
        {
          date: '8-14 मार्च 2026',
          name: 'होली की छुट्टी',
          type: 'त्योहार',
          icon: '🎨'
        },
        {
          date: '29 मार्च - 14 अप्रैल 2026',
          name: 'गर्मी की छुट्टी',
          type: 'लंबी छुट्टी',
          icon: '☀️'
        },
        {
          date: '15 अगस्त 2026',
          name: 'स्वतंत्रता दिवस',
          type: 'राष्ट्रीय छुट्टी',
          icon: '🇮🇳'
        },
        {
          date: '30 अगस्त - 5 सितंबर 2026',
          name: 'जन्माष्टमी की छुट्टी',
          type: 'त्योहार',
          icon: '🪔'
        },
        {
          date: '2 अक्टूबर 2026',
          name: 'गांधी जयंती',
          type: 'राष्ट्रीय छुट्टी',
          icon: '🕯️'
        },
        {
          date: '24 अक्टूबर - 2 नवंबर 2026',
          name: 'दिवाली की छुट्टी',
          type: 'त्योहार',
          icon: '💡'
        },
        {
          date: '20 दिसंबर 2026 - 5 जनवरी 2027',
          name: 'सर्दी की छुट्टी',
          type: 'लंबी छुट्टी',
          icon: '❄️'
        }
      ]
    }
  };

  const data = content[language];

  return (
    <section className="holiday-details">
      <div className="section-container">
        <h1>{data.title}</h1>
        <p className="section-subtitle">{data.subtitle}</p>

        <div className="holiday-grid">
          {data.holidays.map((holiday, index) => (
            <div key={index} className="holiday-card">
              <div className="holiday-icon">{holiday.icon}</div>
              <div className="holiday-date">{holiday.date}</div>
              <h3>{holiday.name}</h3>
              <span className="holiday-type">{holiday.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolidayDetails;
