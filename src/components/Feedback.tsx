import React, { useState } from 'react';
import '../styles/Feedback.css';

interface FeedbackProps {
  language: 'en' | 'hi';
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  additionalField: string;
  feedback: string;
  rating: number;
}

interface FeedbackType {
  id: string;
  iconType: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  formFields: {
    field1En: string;
    field1Hi: string;
    field2En: string;
    field2Hi: string;
    additionalFieldEn: string;
    additionalFieldHi: string;
  };
}

const Feedback: React.FC<FeedbackProps> = ({ language }) => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [formDataStates, setFormDataStates] = useState({
    employer: { name: '', email: '', phone: '', additionalField: '', feedback: '', rating: 5 },
    parent: { name: '', email: '', phone: '', additionalField: '', feedback: '', rating: 5 },
    teacher: { name: '', email: '', phone: '', additionalField: '', feedback: '', rating: 5 }
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const content = {
    en: {
      mainTitle: 'We Value Your Feedback',
      subtitle: 'Share your experience and help us improve',
      submitBtnText: 'Submit Feedback',
      closeBtnText: 'Close',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      feedbackLabel: 'Your Feedback',
      ratingLabel: 'Rate Your Experience',
      successMessage: 'Thank you! Your feedback has been submitted successfully.',
      companyLabel: 'Company Name',
      studentNameLabel: 'Student Name',
      parentNameLabel: 'Parent Name',
      subjectLabel: 'Subject/Course'
    },
    hi: {
      mainTitle: 'हम आपके फीडबैक को महत्व देते हैं',
      subtitle: 'अपने अनुभव साझा करें और हमें बेहतर बनाने में मदद करें',
      submitBtnText: 'फीडबैक जमा करें',
      closeBtnText: 'बंद करें',
      nameLabel: 'पूरा नाम',
      emailLabel: 'ईमेल पता',
      phoneLabel: 'फोन नंबर',
      feedbackLabel: 'आपकी प्रतिक्रिया',
      ratingLabel: 'अपना अनुभव दर करें',
      successMessage: 'धन्यवाद! आपकी प्रतिक्रिया सफलतापूर्वक जमा की गई है।',
      companyLabel: 'कंपनी का नाम',
      studentNameLabel: 'छात्र का नाम',
      parentNameLabel: 'माता-पिता का नाम',
      subjectLabel: 'विषय/पाठ्यक्रम'
    }
  };

  const feedbackTypes: FeedbackType[] = [
    {
      id: 'employer',
      iconType: 'briefcase',
      titleEn: "Employer's Feedback",
      titleHi: 'नियोक्ता की प्रतिक्रिया',
      descriptionEn: 'Share your insights about our students and their performance in the workplace',
      descriptionHi: 'हमारे छात्रों और कार्यस्थल में उनके प्रदर्शन के बारे में अपनी जानकारी साझा करें',
      formFields: {
        field1En: 'Company Name',
        field1Hi: 'कंपनी का नाम',
        field2En: 'Student Name',
        field2Hi: 'छात्र का नाम',
        additionalFieldEn: 'Designation',
        additionalFieldHi: 'पदनाम'
      }
    },
    {
      id: 'parent',
      iconType: 'people',
      titleEn: "Parent's Feedback",
      titleHi: 'माता-पिता की प्रतिक्रिया',
      descriptionEn: "Help us understand how we can better support your child's academic journey",
      descriptionHi: 'हमें समझने में मदद करें कि हम अपने बच्चे की शैक्षणिक यात्रा को बेहतर समर्थन कैसे दे सकते हैं',
      formFields: {
        field1En: 'Parent Name',
        field1Hi: 'माता-पिता का नाम',
        field2En: 'Student Name',
        field2Hi: 'छात्र का नाम',
        additionalFieldEn: 'Class/Year',
        additionalFieldHi: 'कक्षा/वर्ष'
      }
    },
    {
      id: 'teacher',
      iconType: 'graduation',
      titleEn: "Teacher's Feedback",
      titleHi: 'शिक्षक की प्रतिक्रिया',
      descriptionEn: 'Share your perspectives on teaching resources, student engagement, and improvements',
      descriptionHi: 'शिक्षण संसाधनों, छात्र सहभागिता और सुधार पर अपने विचार साझा करें',
      formFields: {
        field1En: 'Teacher Name',
        field1Hi: 'शिक्षक का नाम',
        field2En: 'Subject/Course',
        field2Hi: 'विषय/पाठ्यक्रम',
        additionalFieldEn: 'Department',
        additionalFieldHi: 'विभाग'
      }
    }
  ];

  const currentContent = content[language];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'briefcase':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 7v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
          </svg>
        );
      case 'people':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'graduation':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6m0 0l-8.97 4.486a2 2 0 0 1-1.79.263m10.76-4.75l-9.968-4.982a2 2 0 0 0-1.79-.263m10.76 4.75L2.03 10.487m10.97.487l8.97 4.486m-10.97-.487L2.03 5.513"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  const handleInputChange = (formId: string, field: string, value: string | number) => {
    setFormDataStates(prev => ({
      ...prev,
      [formId]: {
        ...prev[formId as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleSubmit = (formId: string) => {
    const formData = formDataStates[formId as keyof typeof formDataStates];
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.feedback) {
      alert(language === 'en' ? 'Please fill all required fields' : 'कृपया सभी आवश्यक फ़ील्ड भरें');
      return;
    }

    // Here you would typically send data to a backend
    console.log('Submitting feedback:', { formId, formData });
    
    setSubmitMessage(currentContent.successMessage);
    setTimeout(() => {
      setActiveForm(null);
      setSubmitMessage('');
      // Reset form
      setFormDataStates(prev => ({
        ...prev,
        [formId]: { name: '', email: '', phone: '', additionalField: '', feedback: '', rating: 5 }
      }));
    }, 2000);
  };

  return (
    <section className="feedback-section">
      <div className="feedback-container">
        {/* Section Header */}
        <div className="feedback-header">
          <div className="header-line"></div>
          <h2 className="feedback-main-title">{currentContent.mainTitle}</h2>
          <p className="feedback-subtitle">{currentContent.subtitle}</p>
        </div>

        {/* Feedback Cards Grid */}
        <div className="feedback-grid">
          {feedbackTypes.map((feedback) => (
            <div key={feedback.id} className="feedback-card">
              <div className="card-icon-wrapper">
                <div className="card-icon">
                  {renderIcon(feedback.iconType)}
                </div>
              </div>

              <h3 className="feedback-title">
                {language === 'en' ? feedback.titleEn : feedback.titleHi}
              </h3>

              <p className="feedback-description">
                {language === 'en' ? feedback.descriptionEn : feedback.descriptionHi}
              </p>

              <button
                className="open-form-btn"
                onClick={() => setActiveForm(feedback.id)}
              >
                {language === 'en' ? 'Open Form' : 'फॉर्म खोलें'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Forms */}
      {activeForm && (
        <div className="modal-overlay" onClick={() => setActiveForm(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {feedbackTypes.find(f => f.id === activeForm)?.[
                  language === 'en' ? 'titleEn' : 'titleHi'
                ]}
              </h3>
              <button className="modal-close" onClick={() => setActiveForm(null)}>✕</button>
            </div>

            {submitMessage ? (
              <div className="success-message">
                <p>{submitMessage}</p>
              </div>
            ) : (
              <form className="feedback-form" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(activeForm);
              }}>
                {/* Name Field */}
                <div className="form-group">
                  <label>{currentContent.nameLabel} *</label>
                  <input
                    type="text"
                    value={formDataStates[activeForm as keyof typeof formDataStates].name}
                    onChange={(e) => handleInputChange(activeForm, 'name', e.target.value)}
                    placeholder={currentContent.nameLabel}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label>{currentContent.emailLabel} *</label>
                  <input
                    type="email"
                    value={formDataStates[activeForm as keyof typeof formDataStates].email}
                    onChange={(e) => handleInputChange(activeForm, 'email', e.target.value)}
                    placeholder={currentContent.emailLabel}
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <label>{currentContent.phoneLabel} *</label>
                  <input
                    type="tel"
                    value={formDataStates[activeForm as keyof typeof formDataStates].phone}
                    onChange={(e) => handleInputChange(activeForm, 'phone', e.target.value)}
                    placeholder={currentContent.phoneLabel}
                    required
                  />
                </div>

                {/* Additional Field (Dynamic based on form type) */}
                <div className="form-group">
                  <label>
                    {feedbackTypes.find(f => f.id === activeForm)?.formFields?.[
                      language === 'en' ? 'additionalFieldEn' : 'additionalFieldHi'
                    ]}
                  </label>
                  <input
                    type="text"
                    value={formDataStates[activeForm as keyof typeof formDataStates].additionalField}
                    onChange={(e) => handleInputChange(activeForm, 'additionalField', e.target.value)}
                  />
                </div>

                {/* Rating */}
                <div className="form-group">
                  <label>{currentContent.ratingLabel}</label>
                  <div className="rating-input">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        className={`star ${star <= formDataStates[activeForm as keyof typeof formDataStates].rating ? 'active' : ''}`}
                        onClick={() => handleInputChange(activeForm, 'rating', star)}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback Textarea */}
                <div className="form-group">
                  <label>{currentContent.feedbackLabel} *</label>
                  <textarea
                    value={formDataStates[activeForm as keyof typeof formDataStates].feedback}
                    onChange={(e) => handleInputChange(activeForm, 'feedback', e.target.value)}
                    placeholder={currentContent.feedbackLabel}
                    rows={5}
                    required
                  ></textarea>
                </div>

                {/* Form Actions */}
                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    {currentContent.submitBtnText}
                  </button>
                  <button type="button" className="cancel-btn" onClick={() => setActiveForm(null)}>
                    {currentContent.closeBtnText}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;
