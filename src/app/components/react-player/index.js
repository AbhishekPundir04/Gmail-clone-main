import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ url, playerWrapper }) {
  return (
    <div className={playerWrapper}>
      <ReactPlayer
        url={url}
        controls={true}
        className="react-player"
        width="100%"
        height="100%"
      />
    </div>
  );
}
export default VideoPlayer;
