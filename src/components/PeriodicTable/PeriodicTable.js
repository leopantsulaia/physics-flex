import React, { useState, useRef, useEffect } from "react";
import "./PeriodicTable.css";

const PeriodicTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (wrapperRef.current?.requestFullscreen) {
        wrapperRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className={`periodic-table-wrapper ${isFullscreen ? 'fullscreen' : ''}`} ref={wrapperRef}>
      {isLoading && (
        <div className="periodic-table-loading">
          <div className="loading-spinner"></div>
          <p>Loading LeoPhysics Periodic Table...</p>
        </div>
      )}
      <iframe
        src="/LPeriodic/index.html"
        title="LeoPhysics Interactive Periodic Table"
        className="periodic-table-iframe"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
      <button 
        className="fullscreen-btn" 
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        title={isFullscreen ? "Exit Fullscreen (Esc)" : "Enter Fullscreen"}
      >
        {isFullscreen ? (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="8 3 8 8 3 8"></polyline>
            <line x1="8" y1="8" x2="3" y2="3"></line>
            <polyline points="16 3 16 8 21 8"></polyline>
            <line x1="16" y1="8" x2="21" y2="3"></line>
            <polyline points="8 21 8 16 3 16"></polyline>
            <line x1="8" y1="16" x2="3" y2="21"></line>
            <polyline points="16 21 16 16 21 16"></polyline>
            <line x1="16" y1="16" x2="21" y2="21"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="9" y1="15" x2="21" y2="3"></line>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="15" y1="9" x2="3" y2="21"></line>
          </svg>
        )}
      </button>
    </div>
  );
};

export default PeriodicTable;
