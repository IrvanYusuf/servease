import React from "react";
import { Placeholder } from "react-bootstrap";

const SkeletonCardBooking = ({ length }) => {
  return (
    <>
      {Array.from({ length }).map((_, idx) => (
        <Placeholder as="div" animation="glow" key={idx} className="w-100">
          <Placeholder
            style={{ height: "120px", width: "100%" }}
            className="rounded"
          />
        </Placeholder>
      ))}
    </>
  );
};

export default SkeletonCardBooking;
