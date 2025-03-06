import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src, subtitles = [] }) => {
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
          enabled: true,
          fallback: true,
        },
        controlBar: {
          captionsButton: true, // ✅ Ensure captions button is visible
          subsCapsButton: true, // ✅ Ensure subtitles button is visible
        },
      });
    } else {
      // Update video source when `src` changes
      playerRef.current.src([{ src, type: "application/x-mpegURL" }]);
      playerRef.current.load();
      playerRef.current.play();
    }

    // Remove old subtitles before adding new ones
    const tracks = playerRef.current.textTracks();
    while (tracks.length > 0) {
      playerRef.current.removeRemoteTextTrack(tracks[0]);
    }

    // check subtitles are added properly
    subtitles.forEach((sub) => {
    
      if (sub.file && sub.label) {
        const trackElement = playerRef.current.addRemoteTextTrack(
          {
            kind: sub.kind,
            src: sub.file,
            srclang: sub.label.toLowerCase().slice(0, 2), // Convert label to lang code (en, pt, es)
            label: sub.label,
            default: sub.default || false,
          },
          false
        );
        console.log("Added subtitle track:", trackElement);
      } else {
        console.warn("Skipping invalid subtitle track:", sub);
      }
    });

    // ✅ Ensure captions are enabled by default
    if (playerRef.current.textTracks().length > 0) {
      playerRef.current.textTracks()[0].mode = "showing"; // Force display
    }

    setCurrentSrc(src);
  }, [src, subtitles]);

  return (
    <div>
      {!src && <p>Loading video...</p>}
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-big-play-centered"
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
