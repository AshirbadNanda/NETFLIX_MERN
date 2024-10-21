import React from "react";

function Videobackground() {
  return (
    <div className="w-screen  ">
      <iframe
        className="w-screen aspect-video
        "
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Zv11L-ZfrSg?si=KX7iO7QdLLlHp2YM&autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Videobackground;
