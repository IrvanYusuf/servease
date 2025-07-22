import React from "react";
import { Link } from "react-router-dom";
import "@/styles/molecules/cardCategory.css";

const CardCategory = ({ text, image, path }) => {
  return (
    <div className="text-center h-100 ps-0">
      <Link
        to={path}
        className="border h-100 w-100 text-center d-flex row-gap-lg-2 flex-column align-items-center text-decoration-none card-category justify-content-center"
      >
        <img className="card-category-image" src={image} alt="image category" />
        <span className="fw-medium card-category-name">{text}</span>
      </Link>
    </div>
  );
};

export default CardCategory;
