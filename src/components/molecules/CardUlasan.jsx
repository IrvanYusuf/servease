import React from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import "../../styles/molecules/cardUlasan.css";
import StarRating from "../atoms/StarRating";

const CardUlasan = ({
  reviewText,
  reviewImgUser,
  nama_depan = "Anonymus",
  nama_belakang,
  star,
}) => {
  console.log(star);
  return (
    <div className="w-75 border-bottom mb-5">
      <div className="vstack gap-3">
        <div className="d-flex align-items-center column-gap-5">
          <StarRating stars={star} />
          <span className="text-secondary">1 hari yang lalu</span>
        </div>
        <div className="d-flex align-items-center column-gap-3">
          <div className="img-user-review-container">
            <img
              src={reviewImgUser}
              className="w-100 h-100 rounded-circle"
              alt=""
            />
          </div>
          <h5 className="name-user-review-container">
            {nama_depan} {nama_belakang}
          </h5>
        </div>
        <div>
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default CardUlasan;
