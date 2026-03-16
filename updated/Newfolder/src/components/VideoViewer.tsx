import React from 'react';
import '../styles/VideoViewer.css';

interface VideoViewerProps {
  language: 'en' | 'hi';
  onBack: () => void;
  title: string;
  youtubeUrl: string;
}

const VideoViewer: React.FC<VideoViewerProps> = ({ language, onBack, title, youtubeUrl }) => {
  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    let videoId = '';
    
    // Handle different YouTube URL formats
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else {
      videoId = url;
    }
    
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="video-viewer-page">
      <div className="video-header">
        <button className="video-back-btn" onClick={onBack}>
          ← Back
        </button>
        <h1>{title}</h1>
      </div>
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            title={title}
            src={getEmbedUrl(youtubeUrl)}
            className="youtube-iframe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoViewer;
