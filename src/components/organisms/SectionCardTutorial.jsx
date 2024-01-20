import React from "react";
import CardVideoTutorial from "../molecules/CardVideoTutorial";
import "../../styles/organisms/sectionCardTutorial.css";

const SectionCardTutorial = ({ videosData }) => {
  console.log(videosData);
  return (
    <div className="section-card-tutorial-container">
      <h2>Video Tutorial</h2>
      <div className="section-card-tutorial-inner-container">
        <div className="row row-gap-4">
          {videosData.map((video) => (
            <div className="col-4" key={video.id}>
              <CardVideoTutorial
                key={video.id_video}
                videoUrl={video.video_url}
                text={video.judul_video}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionCardTutorial;
