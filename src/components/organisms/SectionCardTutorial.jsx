import React from "react";
import CardVideoTutorial from "@/components/molecules/CardVideoTutorial";
import "@/styles/organisms/sectionCardTutorial.css";
import { Placeholder } from "react-bootstrap";

const SectionCardTutorial = ({ videosData, isLoading }) => {
  console.log(videosData);
  return (
    <div className="section-card-tutorial-container">
      <h2>Video Tutorial</h2>
      <div className="section-card-tutorial-inner-container">
        <div className="row row-gap-4">
          {isLoading ? (
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="col-lg-4 col-12" key={index}>
                  <Placeholder as="div" animation="glow">
                    <Placeholder
                      style={{ height: "200px", width: "100%" }}
                      className="rounded"
                    />
                    <Placeholder
                      style={{ height: "10px", width: "60%" }}
                      className="rounded"
                    />
                  </Placeholder>
                </div>
              ))}
            </>
          ) : (
            videosData?.data?.map((video) => (
              <div className="col-lg-4 col-12" key={video._id}>
                <CardVideoTutorial
                  key={video._id}
                  videoUrl={video.url_video}
                  text={video.name}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionCardTutorial;
