import React from "react";
import { Link } from "react-router-dom";
import "../../styles/atoms/buttonLink.css";

const ButtonLink = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="text-decoration-none fw-bold text-white text-center btn-link"
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
