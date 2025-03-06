import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    if (!playerRef.current) {
      // Initialize player
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        responsive: true,
        fluid: true,
      });
    } else {
      // Update video source when `src` changes
      playerRef.current.src([{ src, type: "application/x-mpegURL" }]);
      playerRef.current.load();
      playerRef.current.play();
    }
    setCurrentSrc(src);
  }, [src]);

  return (
    <div>
      {!src && <p>Loading video...</p>}
      <video ref={videoRef} className="video-js vjs-default-skin vjs-big-play-centered" />
    </div>
  );
};

export default VideoPlayer;
