import React from "react";
import { Link } from "react-router-dom";

const CardVideoTutorial = ({ path, img, text }) => {
  return (
    <Link to={path} className="text-decoration-none" style={{ width: "223px" }}>
      <img
        className="w-100"
        style={{ borderRadius: "10px" }}
        src={img}
        alt=""
      />
      <h5 style={{ fontSize: "18px", color: "#383838", marginTop: "10px" }}>
        {text}
      </h5>
    </Link>
  );
};

export default CardVideoTutorial;
