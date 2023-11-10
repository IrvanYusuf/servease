import React from "react";
import { Link } from "react-router-dom";
import "../../styles/atoms/buttonOutline.css";

const ButtonLinkOutline = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="btn-main-outline"
    >
      {text}
    </Link>
  );
};

export default ButtonLinkOutline;
