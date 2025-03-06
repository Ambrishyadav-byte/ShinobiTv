import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    if (!playerRef.current) {
      // Initialize Video.js player
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        responsive: true,
        fluid: true,
        fullscreen: {
          enabled: true, // ✅ Enable fullscreen mode
          fallback: true, // ✅ Fallback for unsupported browsers
        },
      });
    } else {
      // Update video source when `src` changes
      playerRef.current.src([{ src, type: "application/x-mpegURL" }]);
      playerRef.current.load();
      playerRef.current.play();
    }
    setCurrentSrc(src);
  }, [src]);

  const handleFullScreen = () => {
    if (playerRef.current) {
      playerRef.current.requestFullscreen();
    }
  };

  return (
    <div>
      {!src && <p>Loading video...</p>}
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-big-play-centered"
        playsInline
      />
      <button onClick={handleFullScreen} className="p-2 bg-gray-700 text-white rounded">
        Fullscreen
      </button>
    </div>
  );
};

export default VideoPlayer;
