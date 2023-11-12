import React from "react";
import { Link } from "react-router-dom";
import "../../styles/atoms/buttonLinkOutline.css";

const ButtonLinkOutline = ({ text, path, target = null }) => {
  return (
    <Link
      to={path}
      className="text-decoration-none fw-bold text-center btn-link-outline"
      target={target}
    >
      {text}
    </Link>
  );
};

export default ButtonLinkOutline;
