import React from 'react';
import '../styles/PDFViewer.css';

interface PDFViewerProps {
  language: 'en' | 'hi';
  onBack: () => void;
  title: string;
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ language, onBack, title, pdfUrl }) => {
  return (
    <div className="pdf-viewer-page">
      <div className="pdf-header">
        <button className="pdf-back-btn" onClick={onBack}>
          ← {language === 'en' ? 'Back' : 'पीछे'}
        </button>
        <h1>{title}</h1>
      </div>

      <div className="pdf-container">
        <div className="pdf-viewer">
          <iframe
            title={title}
            src={`${pdfUrl}#toolbar=1`}
            className="pdf-iframe"
            frameBorder="0"
          ></iframe>
        </div>
        
        <div className="pdf-download">
          <a href={pdfUrl} download target="_blank" rel="noopener noreferrer" className="download-btn">
            ⬇️ {language === 'en' ? 'Download PDF' : 'PDF डाउनलोड करें'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
