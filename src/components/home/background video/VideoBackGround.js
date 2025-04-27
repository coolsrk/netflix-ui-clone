import React from "react";
import useFetchBackGroundVideo from "../../../hooks/useFetchBackGroundVideo";

const VideoBackGround = ({ movieId }) => {
  const {isVideoLoaded, setIsVideoLoaded, trailerKey} = useFetchBackGroundVideo(movieId);
  
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {!isVideoLoaded && (
        <div
          className="top-0 left-0 w-full h-full"
          style={{ zIndex: 1 }}
        />
      )}
      <iframe
        className={`top-0 left-0 ${!isVideoLoaded ? "hidden" : ""}`}
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&fs=0&loop=1&playlist=${trailerKey}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video Background"
        style={{
          pointerEvents: "none",
          width: "120vw",
          height: "150vh",
          transform: "translate(-15vw, -20vh)", // center it after upscaling
          margin: 0,
          padding: 0,
          opacity: isVideoLoaded ? 1 : 0, // fade in
        }}
        onLoad={() => setIsVideoLoaded(true)}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-1/3"
        style={{
          background: "linear-gradient(to top, black, transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default VideoBackGround;
