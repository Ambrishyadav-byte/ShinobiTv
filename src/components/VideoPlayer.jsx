import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current && !playerRef.current) {
        playerRef.current = videojs(videoRef.current, {
          controls: true,
          autoplay: false,
          responsive: true,
          fluid: true,
          sources: [{ src, type: "application/x-mpegURL" }],
        });
        setIsLoaded(true);
      }
    }, 100); // Delay to ensure the DOM is ready

    return () => {
      clearTimeout(timeout);
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src]);

  return (
    <div>
      {!isLoaded && <p>Loading video...</p>}
      <video ref={videoRef} className="video-js vjs-default-skin vjs-big-play-centered "/>
    </div>
  );
};

export default VideoPlayer;
