import React from "react";
import { FaStar } from "react-icons/fa6";

const CardUlasan = ({
  reviewText,
  reviewImgUser,
  nama_depan = "Anonymus",
  nama_belakang,
}) => {
  return (
    <div className="w-75 border-bottom mb-5">
      <div className="vstack gap-3">
        <div className="d-flex align-items-center column-gap-5">
          <div className="column-gap-1 d-flex">
            {Array.from({ length: 5 }, (value, index) => {
              return <FaStar key={index} className="text-warning" />;
            })}
          </div>
          <span className="text-secondary">1 hari yang lalu</span>
        </div>
        <div className="d-flex align-items-center column-gap-3">
          <div style={{ width: "40px", height: "40px" }}>
            <img
              src={reviewImgUser}
              className="w-100 h-100 rounded-circle"
              alt=""
            />
          </div>
          <h5 style={{ fontSize: "18px" }}>
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
