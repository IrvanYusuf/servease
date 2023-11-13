import React from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
const StarRating = ({ stars }) => {
  const star = Array.from({ length: 5 }, (value, index) => {
    let number = index + 0.5;
    return (
      <div key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-warning" />
        ) : stars >= number ? (
          <FaStarHalfStroke className="text-warning" size={18} />
        ) : (
          <FaStar className="text-secondary" />
        )}
      </div>
    );
  });
  return <div className="d-flex">{star}</div>;
};

export default StarRating;
