import React from "react";
import { Link } from "react-router-dom";
import "../../styles/atoms/buttonLinkOutline.css";

const ButtonLinkOutline = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="text-decoration-none fw-bold text-center btn-link-outline"
    >
      {text}
    </Link>
  );
};

export default ButtonLinkOutline;
