import React from 'react';
import AdmissionHeader from './AdmissionHeader';
import AdmissionHero from './AdmissionHero';
import Marquee from './Marquee';
import UpdatedSyllabus from './UpdatedSyllabus';
import HolidayDetails from './HolidayDetails';
import Footer from './Footer';
import '../styles/Admission.css';

interface AdmissionProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const Admission: React.FC<AdmissionProps> = ({ language, onBack }) => {
  const content = {
    en: {
      importantDates: 'IMPORTANT DATES',
      keyDates: 'KEY DATES FOR ADMISSION 2026 – 2027',
      applicationStart: 'Application Start',
      applicationDeadline: 'Application Deadline',
      meritList: 'Merit List Publication',
      classesBegin: 'Classes Begin',
      onlinePortal: 'Online application portal opens',
      lastDate: 'Last date to submit application',
      announcement: 'Selected candidates announcement',
      academicSession: 'Academic session starts',
      
      admissionProcess: 'ADMISSION PROCESS',
      stepByStep: 'STEP-BY-STEP GUIDE TO APPLY FOR ADMISSION',
      registerOnline: 'Register Online',
      visitAdmission: 'Visit the admission portal and create your account with your email and phone number.',
      fillApplication: 'Fill Application',
      completeForm: 'Complete the application form with all required personal and academic details.',
      uploadDocuments: 'Upload Documents',
      submitRequired: 'Submit all required documents in PDF format as per the specified requirements.',
      payFee: 'Pay Fee & Submit',
      completePayment: 'Complete the application fee payment and submit your application form.',
      
      requiredDocuments: 'REQUIRED DOCUMENTS',
      documentsNeeded: 'DOCUMENTS YOU NEED TO SUBMIT FOR ADMISSION',
      educationalCertificates: 'Educational Certificates',
      tenth: '10th and 12th standard mark sheets',
      graduation: 'Graduation degree certificate and mark sheet',
      migration: 'Migration certificate',
      character: 'Character certificate',
      identification: 'Identification & Personal Documents',
      aadhaar: 'Aadhar card copy',
      passport: 'Passport size photograph (4x6 cm)',
      birthCert: 'Birth certificate',
      caste: 'Caste certificate (if applicable)',
      addressProof: 'Address Proof',
      pasport: 'Passport or Aadhar card',
      voterId: 'Voter ID or Driving License',
      electricity: 'Electricity or Water Bill',
      rent: 'Rent agreement (if applicable)',
      additional: 'Additional Documents',
      entrance: 'Entrance exam scorecard (if applicable)',
      sports: 'Sports/Cultural achievement certificates',
      medical: 'Medical fitness certificate',
      gap: 'Gap affidavit (if applicable)',
      
      admissionCriteria: 'ADMISSION CRITERIA',
      eligibility: 'ELIGIBILITY AND SELECTION CRITERIA FOR VARIOUS PROGRAMS',
      bachelors: "Bachelor's Degree (B.A., B.Sc., B.Com)",
      bachelorEligibility: '12th Pass from recognized board',
      bachelorAge: 'No age limit',
      bachelorSelection: 'Merit-based on 12th marks',
      bachelorMinimum: '45% aggregate',
      masters: "Master's Degree (M.A., M.Sc., M.Com)",
      mastersEligibility: "Bachelor's degree in relevant field",
      mastersAge: 'No age limit',
      mastersSelection: 'Merit in Entrance Exam',
      mastersMinimum: '50% in graduation',
      phd: 'Ph.D. Program',
      phdEligibility: "Master's degree in relevant field",
      phdAge: 'No age limit',
      phdSelection: 'Interview & Research proposal',
      phdMinimum: "55% in master's",
      
      scholarships: 'SCHOLARSHIPS',
      scholarshipDesc: 'FINANCIAL AID AND SCHOLARSHIP OPPORTUNITIES'
    },
    hi: {
      importantDates: 'महत्वपूर्ण तारीखें',
      keyDates: 'प्रवेश 2026 - 2027 की मुख्य तारीखें',
      applicationStart: 'आवेदन शुरुआत',
      applicationDeadline: 'आवेदन की समय सीमा',
      meritList: 'योग्यता सूची प्रकाशन',
      classesBegin: 'कक्षाएं शुरू',
      onlinePortal: 'ऑनलाइन आवेदन पोर्टल खुलता है',
      lastDate: 'आवेदन जमा करने की अंतिम तारीख',
      announcement: 'चयनित उम्मीदवारों की घोषणा',
      academicSession: 'शैक्षणिक सत्र शुरू होता है',
      
      admissionProcess: 'प्रवेश प्रक्रिया',
      stepByStep: 'प्रवेश के लिए आवेदन करने के लिए चरण-दर-चरण मार्गदर्शन',
      registerOnline: 'ऑनलाइन पंजीकरण करें',
      visitAdmission: 'प्रवेश पोर्टल पर जाएं और अपने ईमेल और फोन नंबर से अपना खाता बनाएं।',
      fillApplication: 'आवेदन भरें',
      completeForm: 'आवेदन फॉर्म को सभी आवश्यक व्यक्तिगत और शैक्षणिक विवरण के साथ पूरा करें।',
      uploadDocuments: 'दस्तावेज अपलोड करें',
      submitRequired: 'निर्दिष्ट आवश्यकताओं के अनुसार सभी आवश्यक दस्तावेज PDF प्रारूप में जमा करें।',
      payFee: 'शुल्क का भुगतान करें और जमा करें',
      completePayment: 'आवेदन शुल्क का भुगतान पूरा करें और अपना आवेदन फॉर्म जमा करें।',
      
      requiredDocuments: 'आवश्यक दस्तावेज',
      documentsNeeded: 'प्रवेश के लिए जमा करने के लिए आवश्यक दस्तावेज',
      educationalCertificates: 'शैक्षणिक प्रमाणपत्र',
      tenth: '10वीं और 12वीं के मार्क शीट',
      graduation: 'स्नातक डिग्री प्रमाणपत्र और मार्क शीट',
      migration: 'स्थानांतरण प्रमाणपत्र',
      character: 'चरित्र प्रमाणपत्र',
      identification: 'पहचान और व्यक्तिगत दस्तावेज',
      aadhaar: 'आधार कार्ड की प्रति',
      passport: 'पासपोर्ट आकार की तस्वीर (4x6 सेमी)',
      birthCert: 'जन्म प्रमाणपत्र',
      caste: 'जाति प्रमाणपत्र (यदि लागू हो)',
      addressProof: 'पता प्रमाण',
      pasport: 'पासपोर्ट या आधार कार्ड',
      voterId: 'मतदाता पहचान पत्र या ड्राइविंग लाइसेंस',
      electricity: 'बिजली या पानी का बिल',
      rent: 'किराया समझौता (यदि लागू हो)',
      additional: 'अतिरिक्त दस्तावेज',
      entrance: 'प्रवेश परीक्षा स्कोरकार्ड (यदि लागू हो)',
      sports: 'खेल/सांस्कृतिक उपलब्धि प्रमाणपत्र',
      medical: 'चिकित्सा फिटनेस प्रमाणपत्र',
      gap: 'गैप शपथपत्र (यदि लागू हो)',
      
      admissionCriteria: 'प्रवेश मानदंड',
      eligibility: 'विभिन्न कार्यक्रमों के लिए पात्रता और चयन मानदंड',
      bachelors: 'स्नातक डिग्री (बी.ए., बी.एससी., बी.कॉम)',
      bachelorEligibility: 'मान्यता प्राप्त बोर्ड से 12वीं पास',
      bachelorAge: 'कोई आयु सीमा नहीं',
      bachelorSelection: '12वीं अंकों के आधार पर योग्यता',
      bachelorMinimum: '45% कुल',
      masters: 'मास्टर डिग्री (एम.ए., एम.एससी., एम.कॉम)',
      mastersEligibility: 'प्रासंगिक क्षेत्र में स्नातक डिग्री',
      mastersAge: 'कोई आयु सीमा नहीं',
      mastersSelection: 'प्रवेश परीक्षा में योग्यता',
      mastersMinimum: 'स्नातकोत्तर में 50%',
      phd: 'पीएच.डी. कार्यक्रम',
      phdEligibility: 'प्रासंगिक क्षेत्र में मास्टर डिग्री',
      phdAge: 'कोई आयु सीमा नहीं',
      phdSelection: 'साक्षात्कार और अनुसंधान प्रस्ताव',
      phdMinimum: "मास्टर में 55%",
      
      scholarships: 'छात्रवृत्तियां',
      scholarshipDesc: 'वित्तीय सहायता और छात्रवृत्ति के अवसर'
    }
  };

  const data = content[language];

  return (
    <div className="admission-page">
      <Marquee language={language} />
      <AdmissionHeader language={language} onBack={onBack} />
      <AdmissionHero language={language} />
      
      {/* Important Dates Section */}
      <section className="important-dates">
        <div className="section-container">
          <h1>{data.importantDates}</h1>
          <p className="section-subtitle">{data.keyDates}</p>
          
          <div className="dates-grid">
            <div className="date-card">
              <div className="date-icon">📅</div>
              <h3>{data.applicationStart}</h3>
              <p className="date-value">January 15, 2026</p>
              <p className="date-description">{data.onlinePortal}</p>
            </div>
            
            <div className="date-card">
              <div className="date-icon">📋</div>
              <h3>{data.applicationDeadline}</h3>
              <p className="date-value">May 31, 2026</p>
              <p className="date-description">{data.lastDate}</p>
            </div>
            
            <div className="date-card">
              <div className="date-icon">✓</div>
              <h3>{data.meritList}</h3>
              <p className="date-value">June 30, 2026</p>
              <p className="date-description">{data.announcement}</p>
            </div>
            
            <div className="date-card">
              <div className="date-icon">🎓</div>
              <h3>{data.classesBegin}</h3>
              <p className="date-value">August 1, 2026</p>
              <p className="date-description">{data.academicSession}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="admission-process">
        <div className="section-container">
          <h1>{data.admissionProcess}</h1>
          <p className="section-subtitle">{data.stepByStep}</p>
          
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">1</div>
              <h3>{data.registerOnline}</h3>
              <p>{data.visitAdmission}</p>
            </div>
            
            <div className="process-card">
              <div className="process-number">2</div>
              <h3>{data.fillApplication}</h3>
              <p>{data.completeForm}</p>
            </div>
            
            <div className="process-card">
              <div className="process-number">3</div>
              <h3>{data.uploadDocuments}</h3>
              <p>{data.submitRequired}</p>
            </div>
            
            <div className="process-card">
              <div className="process-number">4</div>
              <h3>{data.payFee}</h3>
              <p>{data.completePayment}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="required-documents">
        <div className="section-container">
          <h1>{data.requiredDocuments}</h1>
          <p className="section-subtitle">{data.documentsNeeded}</p>
          
          <div className="documents-grid">
            <div className="document-card">
              <div className="doc-icon">📄</div>
              <h3>{data.educationalCertificates}</h3>
              <ul>
                <li>✓ {data.tenth}</li>
                <li>✓ {data.graduation}</li>
                <li>✓ {data.migration}</li>
                <li>✓ {data.character}</li>
              </ul>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">🆔</div>
              <h3>{data.identification}</h3>
              <ul>
                <li>✓ {data.aadhaar}</li>
                <li>✓ {data.passport}</li>
                <li>✓ {data.birthCert}</li>
                <li>✓ {data.caste}</li>
              </ul>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">🏠</div>
              <h3>{data.addressProof}</h3>
              <ul>
                <li>✓ {data.pasport}</li>
                <li>✓ {data.voterId}</li>
                <li>✓ {data.electricity}</li>
                <li>✓ {data.rent}</li>
              </ul>
            </div>
            
            <div className="document-card">
              <div className="doc-icon">🎖️</div>
              <h3>{data.additional}</h3>
              <ul>
                <li>✓ {data.entrance}</li>
                <li>✓ {data.sports}</li>
                <li>✓ {data.medical}</li>
                <li>✓ {data.gap}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Criteria Section */}
      <section className="admission-criteria">
        <div className="section-container">
          <h1>{data.admissionCriteria}</h1>
          <p className="section-subtitle">{data.eligibility}</p>
          
          <div className="criteria-grid">
            <div className="criteria-card">
              <h3>{data.bachelors}</h3>
              <div className="criteria-details">
                <p><strong>Eligibility:</strong> {data.bachelorEligibility}</p>
                <p><strong>Age Limit:</strong> {data.bachelorAge}</p>
                <p><strong>Selection:</strong> {data.bachelorSelection}</p>
                <p><strong>Minimum %:</strong> {data.bachelorMinimum}</p>
              </div>
            </div>
            
            <div className="criteria-card">
              <h3>{data.masters}</h3>
              <div className="criteria-details">
                <p><strong>Eligibility:</strong> {data.mastersEligibility}</p>
                <p><strong>Age Limit:</strong> {data.mastersAge}</p>
                <p><strong>Selection:</strong> {data.mastersSelection}</p>
                <p><strong>Minimum %:</strong> {data.mastersMinimum}</p>
              </div>
            </div>
            
            <div className="criteria-card">
              <h3>{data.phd}</h3>
              <div className="criteria-details">
                <p><strong>Eligibility:</strong> {data.phdEligibility}</p>
                <p><strong>Age Limit:</strong> {data.phdAge}</p>
                <p><strong>Selection:</strong> {data.phdSelection}</p>
                <p><strong>Minimum %:</strong> {data.phdMinimum}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UpdatedSyllabus language={language} />

      <HolidayDetails language={language} />

      <Footer language={language} />
    </div>
  );
};

export default Admission;
