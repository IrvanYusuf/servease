import React from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
const StarRating = ({ stars }) => {
  const star = Array.from({ length: 5 }, (value, index) => {
    let number = index + 1;
    return (
      <div key={index}>
        {stars >= number ? (
          <FaStar className="text-warning" />
        ) : (
          <FaStar className="text-secondary" />
        )}
      </div>
    );
  });
  return <div className="d-flex">{star}</div>;
};

export default StarRating;
