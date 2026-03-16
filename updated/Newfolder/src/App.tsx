import React, { useState } from 'react';
import './App.css';
import UniversityHomepage from './components/UniversityHomepage';
import Admission from './components/Admission';
import Administration from './components/Administration';
import AboutUs from './components/AboutUs';
import Sports from './components/Sports';
import Cultural from './components/Cultural';
import Academics from './components/Academics';
import UPStateUniversitiesAct from './components/UPStateUniversitiesAct';
import RTIAct from './components/RTIAct';
import IQACPage from './components/IQACPage';
import StartupCell from './components/StartupCell';
import ITPolicy from './components/ITPolicy';
import IPRPolicy from './components/IPRPolicy';
import PhDPage from './components/PhDPage';
import ScienceStaff from './components/ScienceStaff';
import ArtsStaff from './components/ArtsStaff';
import CommerceStaff from './components/CommerceStaff';
import PhotoGallery from './components/PhotoGallery';
import NewsGallery from './components/NewsGallery';
import CampusSportsGallery from './components/CampusSportsGallery';
import ConferenceSeminar from './components/ConferenceSeminar';
import CentreOfExcellence from './components/CentreOfExcellence';
import CentreOfExcellencePage from './components/CentreOfExcellencePage';
import ResearchDevelopmentPage from './components/ResearchDevelopmentPage';
import FacultyDevelopmentPage from './components/FacultyDevelopmentPage';
import ConferenceSeminarWorkshopPage from './components/ConferenceSeminarWorkshopPage';
import PDFViewer from './components/PDFViewer';
import VideoViewer from './components/VideoViewer';
import NCC from './components/NCC';
import EventsSports from './components/EventsSports';
import MOUs from './components/MOUs';
import ScienceJournal from './components/ScienceJournal';
import CommerceJournal from './components/CommerceJournal';
import ArtJournal from './components/ArtJournal';
import AntiRagging from './components/AntiRagging';
import HostelRegistration from './components/HostelRegistration';
import CampusFeePayment from './components/CampusFeePayment';
import StudentCouncil from './components/StudentCouncil';
import StudentHandbook from './components/StudentHandbook';
import StudentFeedbackForm from './components/StudentFeedbackForm';
import StudentHelpDesk from './components/StudentHelpDesk';
import WomenCell from './components/WomenCell';
import DocumentVerification from './components/DocumentVerification';
import UniversityCampus from './components/UniversityCampus';
import PanditLalitMohanSharmaCollege from './components/PanditLalitMohanSharmaCollege';
import GovernmentPostGraduateCollege from './components/GovernmentPostGraduateCollege';
import UniversityAffiliatedColleges from './components/UniversityAffiliatedColleges';
import GovernmentColleges from './components/GovernmentColleges';
import AidedColleges from './components/AidedColleges';
import PrivateColleges from './components/PrivateColleges';

function App() {
  const [language, setLanguage] = useState('en');
  const [currentPage, setCurrentPage] = useState<'home' | 'admission' | 'administration' | 'about' | 'sports' | 'cultural' | 'academics' | 'up-state-universities-act' | 'rti-act' | 'iqac' | 'startup-cell' | 'it-policy' | 'ipr-policy' | 'phd-dlitt' | 'science-staff' | 'arts-staff' | 'commerce-staff' | 'photo-gallery' | 'news-gallery' | 'conference-seminar' | 'centre-excellence' | 'ncc' | 'events-sports' | 'moues' | 'science-journal' | 'commerce-journal' | 'art-journal' | 'anti-ragging' | 'hostel-registration' | 'campus-fee-payment' | 'student-council' | 'student-handbook' | 'student-feedback-form' | 'student-help-desk' | 'women-cell' | 'document-verification' | 'university-campus' | 'pandit-lalit-college' | 'govt-pg-college' | 'affiliated-colleges' | 'govt-colleges' | 'aided-colleges' | 'private-colleges' | 'campus-sports-gallery' | 'centre-excellence-page' | 'research-development' | 'faculty-development' | 'conference-seminar-workshop' | 'college-affiliation-pdf' | 'ordinance-curriculum-pdf' | 'scholarship-pdf' | 'convocation-medal-pdf' | 'phd-merit-list-pdf' | 'nirf-pdf' | 'academic-calendar-pdf' | 'helpline-pdf' | 'phd-notification-pdf' | 'exam-date-sheet-pdf' | 'convocation-quotation-pdf' | 'university-film-pdf'>('home');
  const [history, setHistory] = useState<Array<'home' | 'admission' | 'administration' | 'about' | 'sports' | 'cultural' | 'academics' | 'up-state-universities-act' | 'rti-act' | 'iqac' | 'startup-cell' | 'it-policy' | 'ipr-policy' | 'phd-dlitt' | 'science-staff' | 'arts-staff' | 'commerce-staff' | 'photo-gallery' | 'news-gallery' | 'conference-seminar' | 'centre-excellence' | 'ncc' | 'events-sports' | 'moues' | 'science-journal' | 'commerce-journal' | 'art-journal' | 'anti-ragging' | 'hostel-registration' | 'campus-fee-payment' | 'student-council' | 'student-handbook' | 'student-feedback-form' | 'student-help-desk' | 'women-cell' | 'document-verification' | 'university-campus' | 'pandit-lalit-college' | 'govt-pg-college' | 'affiliated-colleges' | 'govt-colleges' | 'aided-colleges' | 'private-colleges' | 'campus-sports-gallery' | 'centre-excellence-page' | 'research-development' | 'faculty-development' | 'conference-seminar-workshop' | 'college-affiliation-pdf' | 'ordinance-curriculum-pdf' | 'scholarship-pdf' | 'convocation-medal-pdf' | 'phd-merit-list-pdf' | 'nirf-pdf' | 'academic-calendar-pdf' | 'helpline-pdf' | 'phd-notification-pdf' | 'exam-date-sheet-pdf' | 'convocation-quotation-pdf' | 'university-film-pdf'>>(['home']);

  const handleNavigate = (page: 'home' | 'admission' | 'administration' | 'about' | 'sports' | 'cultural' | 'academics' | 'up-state-universities-act' | 'rti-act' | 'iqac' | 'startup-cell' | 'it-policy' | 'ipr-policy' | 'phd-dlitt' | 'science-staff' | 'arts-staff' | 'commerce-staff' | 'photo-gallery' | 'news-gallery' | 'conference-seminar' | 'centre-excellence' | 'ncc' | 'events-sports' | 'moues' | 'science-journal' | 'commerce-journal' | 'art-journal' | 'anti-ragging' | 'hostel-registration' | 'campus-fee-payment' | 'student-council' | 'student-handbook' | 'student-feedback-form' | 'student-help-desk' | 'women-cell' | 'document-verification' | 'university-campus' | 'pandit-lalit-college' | 'govt-pg-college' | 'affiliated-colleges' | 'govt-colleges' | 'aided-colleges' | 'private-colleges' | 'campus-sports-gallery' | 'centre-excellence-page' | 'research-development' | 'faculty-development' | 'conference-seminar-workshop' | 'college-affiliation-pdf' | 'ordinance-curriculum-pdf' | 'scholarship-pdf' | 'convocation-medal-pdf' | 'phd-merit-list-pdf' | 'nirf-pdf' | 'academic-calendar-pdf' | 'helpline-pdf' | 'phd-notification-pdf' | 'exam-date-sheet-pdf' | 'convocation-quotation-pdf' | 'university-film-pdf') => {
    setCurrentPage(page);
    setHistory([...history, page]);
    window.history.pushState({ page }, '');
  };

  const handleGoBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentPage(newHistory[newHistory.length - 1]);
    } else {
      setCurrentPage('home');
      setHistory(['home']);
    }
  };

  // Handle browser back button
  React.useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('home');
        setHistory(['home']);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top when page changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="App">
      <div className="language-switcher">
        <button
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'active' : ''}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('hi')}
          className={language === 'hi' ? 'active' : ''}
        >
          HI
        </button>
      </div>
      {currentPage === 'home' && <UniversityHomepage language={language} setCurrentPage={handleNavigate} />}
      {currentPage === 'admission' && <Admission language={language} onBack={handleGoBack} />}
      {currentPage === 'administration' && <Administration language={language} />}
      {currentPage === 'about' && <AboutUs language={language} setCurrentPage={handleNavigate} onBack={handleGoBack} />}
      {currentPage === 'sports' && <Sports language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'cultural' && <Cultural language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'academics' && <Academics language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'up-state-universities-act' && <UPStateUniversitiesAct language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'rti-act' && <RTIAct language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'iqac' && <IQACPage language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'startup-cell' && <StartupCell language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'it-policy' && <ITPolicy language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'ipr-policy' && <IPRPolicy language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'phd-dlitt' && <PhDPage language={language} onBack={handleGoBack} onHome={() => handleNavigate('home')} />}
      {currentPage === 'science-staff' && <ScienceStaff language={language} onBack={handleGoBack} />}
      {currentPage === 'arts-staff' && <ArtsStaff language={language} onBack={handleGoBack} />}
      {currentPage === 'commerce-staff' && <CommerceStaff language={language} onBack={handleGoBack} />}
      {currentPage === 'photo-gallery' && <PhotoGallery language={language} onBack={handleGoBack} />}
      {currentPage === 'news-gallery' && <NewsGallery language={language} onBack={handleGoBack} />}
      {currentPage === 'campus-sports-gallery' && <CampusSportsGallery language={language} onBack={handleGoBack} />}
      {currentPage === 'conference-seminar' && <ConferenceSeminar language={language} onBack={handleGoBack} />}
      {currentPage === 'centre-excellence' && <CentreOfExcellence language={language} onBack={handleGoBack} />}
      {currentPage === 'ncc' && <NCC language={language} onBack={handleGoBack} />}
      {currentPage === 'events-sports' && <EventsSports language={language} onBack={handleGoBack} />}
      {currentPage === 'moues' && <MOUs language={language} onBack={handleGoBack} />}
      {currentPage === 'centre-excellence-page' && <CentreOfExcellencePage language={language} onBack={handleGoBack} />}
      {currentPage === 'research-development' && <ResearchDevelopmentPage language={language} onBack={handleGoBack} />}
      {currentPage === 'faculty-development' && <FacultyDevelopmentPage language={language} onBack={handleGoBack} />}
      {currentPage === 'conference-seminar-workshop' && <ConferenceSeminarWorkshopPage language={language} onBack={handleGoBack} />}
      {currentPage === 'science-journal' && <ScienceJournal language={language} onBack={handleGoBack} />}
      {currentPage === 'commerce-journal' && <CommerceJournal language={language} onBack={handleGoBack} />}
      {currentPage === 'art-journal' && <ArtJournal language={language} onBack={handleGoBack} />}
      {currentPage === 'anti-ragging' && <AntiRagging language={language} onBack={handleGoBack} />}
      {currentPage === 'hostel-registration' && <HostelRegistration language={language} onBack={handleGoBack} />}
      {currentPage === 'campus-fee-payment' && <CampusFeePayment language={language} onBack={handleGoBack} />}
      {currentPage === 'student-council' && <StudentCouncil language={language} onBack={handleGoBack} />}
      {currentPage === 'student-handbook' && <StudentHandbook language={language} onBack={handleGoBack} />}
      {currentPage === 'student-feedback-form' && <StudentFeedbackForm language={language} onBack={handleGoBack} />}
      {currentPage === 'student-help-desk' && <StudentHelpDesk language={language} onBack={handleGoBack} />}
      {currentPage === 'women-cell' && <WomenCell language={language} onBack={handleGoBack} />}
      {currentPage === 'document-verification' && <DocumentVerification language={language} onBack={handleGoBack} />}
      {currentPage === 'university-campus' && <UniversityCampus language={language} onBack={handleGoBack} />}
      {currentPage === 'pandit-lalit-college' && <PanditLalitMohanSharmaCollege language={language} onBack={handleGoBack} />}
      {currentPage === 'govt-pg-college' && <GovernmentPostGraduateCollege language={language} onBack={handleGoBack} />}
      {currentPage === 'affiliated-colleges' && <UniversityAffiliatedColleges language={language} onBack={handleGoBack} />}
      {currentPage === 'govt-colleges' && <GovernmentColleges language={language} onBack={handleGoBack} />}
      {currentPage === 'aided-colleges' && <AidedColleges language={language} onBack={handleGoBack} />}
      {currentPage === 'private-colleges' && <PrivateColleges language={language} onBack={handleGoBack} />}
      {currentPage === 'college-affiliation-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="College Affiliation Portal" pdfUrl="/img/ppf/SRI%20DEV%20SUMAN%20UTTARAKHAND%20UNIVERSITY%2C%20BADSHAHITHOL%2C%20TEHRI20250216-.pdf" />}
      {currentPage === 'ordinance-curriculum-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Ordinance & Curriculum Framework - 2025" pdfUrl="/img/ppf/ordinance2025.pdf" />}
      {currentPage === 'scholarship-pdf' && <PDFViewer language={language} onBack={handleGoBack} title={language === 'en' ? 'Scholarship' : 'छात्रवृत्ति'} pdfUrl="/img/ppf/DocScanner%2011%20Jul%202025%202-49%20pm.pdf" />}
      {currentPage === 'convocation-medal-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="6th Convocation Gold Medal List" pdfUrl="/img/ppf/CHATRASANG.pdf" />}
      {currentPage === 'phd-merit-list-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Ph.D. Entrance Exam Second Counselling Merit List" pdfUrl="/img/ppf/DocScanner%2011%20Jul%202025%202-49%20pm.pdf" />}
      {currentPage === 'nirf-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="NIRF" pdfUrl="/img/ppf/NIRF.pdf" />}
      {currentPage === 'academic-calendar-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Academic Calendar for Session 2025-2026" pdfUrl="/img/ppf/ACADEMIC%20CALENDER.pdf" />}
      {currentPage === 'helpline-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Helpline Information" pdfUrl="/img/ppf/ordinance2025.pdf" />}
      {currentPage === 'phd-notification-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Ph.D. Notification and List - 2025" pdfUrl="/img/ppf/DocScanner%2011%20Jul%202025%202-49%20pm.pdf" />}
      {currentPage === 'exam-date-sheet-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Exam Date Sheet 2025-2026" pdfUrl="/img/ppf/ACADEMIC%20CALENDER.pdf" />}
      {currentPage === 'convocation-quotation-pdf' && <PDFViewer language={language} onBack={handleGoBack} title="Quotation for Convocation" pdfUrl="/img/ppf/CHATRASANG.pdf" />}
      {currentPage === 'university-film-pdf' && <VideoViewer language={language} onBack={handleGoBack} title="University Short Film" youtubeUrl="https://youtu.be/MrnVpih6Sq0?si=G70rytvIdSsDsgGG" />}
    </div>
  );
}

export default App;
