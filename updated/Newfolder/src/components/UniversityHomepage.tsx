import React from 'react';
import Header from './Header';
import Marquee from './Marquee';
import HeroSection from './HeroSection';
import LatestUpdates from './LatestUpdates';
import News from './News';
import ResearchPublications from './ResearchPublications';
import ImportantLinksBar from './ImportantLinksBar';
import ReadyToJoinUs from './ReadyToJoinUs';
import CampusLife from './CampusLife';
import WhyChooseUs from './WhyChooseUs';
import QuickLinks from './QuickLinks';
import InstitutesSection from './InstitutesSection';
import ResearchInnovation from './ResearchInnovation';
import DatesheetSyllabus from './DatesheetSyllabus';
import Feedback from './Feedback';
import Footer from './Footer';
import '../styles/UniversityHomepage.css';

interface UniversityHomepageProps {
  language: 'en' | 'hi';
  setCurrentPage: (page: string) => void;
}

const UniversityHomepage: React.FC<UniversityHomepageProps> = ({ language, setCurrentPage }) => {
  const handleImportantLinkClick = (linkId: string) => {
    const linkPageMap: { [key: string]: string } = {
      'college-affiliation': 'college-affiliation-pdf',
      'ordinance-curriculum': 'ordinance-curriculum-pdf',
      'scholarship': 'scholarship-pdf',
      'convocation-medal': 'convocation-medal-pdf',
      'phd-merit-list': 'phd-merit-list-pdf',
      'nirf': 'nirf-pdf',
      'academic-calendar': 'academic-calendar-pdf',
      'helpline': 'helpline-pdf',
      'phd-notification': 'phd-notification-pdf',
      'exam-date-sheet': 'exam-date-sheet-pdf',
      'convocation-quotation': 'convocation-quotation-pdf',
      'university-film': 'university-film-pdf'
    };

    const page = linkPageMap[linkId];
    if (page) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="university-homepage">
      <Marquee language={language} />
      <Header language={language} setCurrentPage={setCurrentPage} />
      <div className="main-content">
        <HeroSection language={language} />
        <LatestUpdates language={language} />
      </div>
      <ResearchPublications language={language} setCurrentPage={setCurrentPage} />
      <ImportantLinksBar language={language} onLinkClick={handleImportantLinkClick} />
      <ReadyToJoinUs language={language} />
      <CampusLife language={language} setCurrentPage={setCurrentPage} />
      <WhyChooseUs language={language} />
      <QuickLinks language={language} />
      <InstitutesSection language={language} />
      <ResearchInnovation language={language} />
      <DatesheetSyllabus language={language} />
      <News language={language} />
      <Feedback language={language} />
      <Footer language={language} />
    </div>
  );
};

export default UniversityHomepage;
