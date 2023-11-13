import React from "react";
import ReactPlayer from "react-player";
import "../../styles/molecules/cardVideoTutorial.css";

const CardVideoTutorial = ({ text, videoUrl }) => {
  return (
    <div className="h-100">
      <div className="rounded-4 overflow-hidden video-tutorial-img-container">
        <ReactPlayer
          url={videoUrl}
          width={"100%"}
          height={"100%"}
          controls={true}
        />
      </div>
      <h5 className="video-tutorial-title">{text}</h5>
    </div>
  );
};

export default CardVideoTutorial;
