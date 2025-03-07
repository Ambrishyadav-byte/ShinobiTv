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
        autoplay: true, 
        responsive: true,
        fluid: true,
        fullscreen: {
          enabled: true,
          fallback: true,
        },
        controlBar: {
         captionsButton: true, 
          subsCapsButton: true, 
        },
      });
    } else {
      // Update video source when `src` changes
      playerRef.current.src([{ src, type: "application/x-mpegURL" }]);
      playerRef.current.load();
      playerRef.current.play(); // ✅ Auto-play on new source
    }

    // Remove old subtitles before adding new ones
    const tracks = playerRef.current.textTracks();
    while (tracks.length > 0) {
      playerRef.current.removeRemoteTextTrack(tracks[0]);
    }

    // ✅ Add subtitles
    subtitles.forEach((sub) => {
      if (sub.file && sub.label) {
        playerRef.current.addRemoteTextTrack(
          {
            kind: sub.kind,
            src: sub.file,
            srclang: sub.label.toLowerCase().slice(0, 2),
            label: sub.label,
            default: sub.default || false,
          },
          false
        );
      }
    });

    // ✅ Ensure captions are enabled by default
    if (playerRef.current.textTracks().length > 0) {
      playerRef.current.textTracks()[0].mode = "showing";
    }

    setCurrentSrc(src);
  }, [src, subtitles]);

  return (
    <div>
      {!src && <p>Loading video...</p>}
      <video ref={videoRef} className="video-js vjs-default-skin vjs-big-play-centered" playsInline />
    </div>
  );
};

export default VideoPlayer;
