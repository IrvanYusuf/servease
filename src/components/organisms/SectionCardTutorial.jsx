import React from "react";
import CardVideoTutorial from "../molecules/CardVideoTutorial";
import "../../styles/organisms/sectionCardTutorial.css";

const SectionCardTutorial = ({ videosData }) => {
  return (
    <div className="section-card-tutorial-container">
      <h2>Video Tutorial</h2>
      <div className="section-card-tutorial-inner-container">
        <div className="row row-gap-4">
          {videosData.map((video) => (
            <div className="col-4">
              <CardVideoTutorial
                key={video.id}
                videoUrl={video.path}
                text={video.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionCardTutorial;
