import React from "react";
import CardVideoTutorial from "../molecules/CardVideoTutorial";
import Carousel from "nuka-carousel";

const SectionCardTutorial = ({ videosData }) => {
  return (
    <div style={{ marginTop: "69px" }}>
      <h2>Video Tutorial</h2>
      <div style={{ marginTop: "28px" }}>
        <Carousel
          slidesToShow={2.3}
          cellSpacing={20}
          renderCenterLeftControls={false}
          renderCenterRightControls={false}
          renderBottomCenterControls={false}
          wrapAround={true}
          autoplay={true}
        >
          {videosData.map((video) => (
            <CardVideoTutorial
              key={video.id}
              path={video.path}
              img={video.image}
              text={video.title}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SectionCardTutorial;
