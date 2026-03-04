// src/components/IntroVideo.jsx
import React, { useEffect } from "react";
import BeginVideo from "../assets/BeginVideo.mp4";
import "./IntroVideo.css";

const IntroVideo = ({ onVideoEnd }) => {

  // Prevent scrolling while video plays
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="video-overlay">
      <video
        src={BeginVideo}
        autoPlay
        muted
        playsInline
        onEnded={onVideoEnd}
        className="intro-video"
      />
    </div>
  );
};

export default IntroVideo;
